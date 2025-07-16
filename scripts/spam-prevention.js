// Spam Prevention and Form Security
class SpamPrevention {
    constructor() {
        this.honeypotField = 'website';
        this.timeThreshold = 3000; // 3 seconds minimum form fill time
        this.maxSubmissions = 3; // Max submissions per hour per IP
        this.submissions = this.getSubmissionsFromStorage();
        this.init();
    }

    init() {
        this.addHoneypotField();
        this.addTimeTracking();
        this.addRateLimiting();
        this.addInputValidation();
        this.addCSRFProtection();
    }

    // Add invisible honeypot field
    addHoneypotField() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const honeypot = document.createElement('div');
        honeypot.style.cssText = 'position: absolute; left: -9999px; opacity: 0;';
        honeypot.innerHTML = `
            <input type="text" name="${this.honeypotField}" autocomplete="off" tabindex="-1">
        `;
        form.appendChild(honeypot);
    }

    // Track form fill time
    addTimeTracking() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        let startTime = Date.now();
        
        form.addEventListener('focusin', () => {
            if (!startTime) startTime = Date.now();
        });

        form.addEventListener('submit', (e) => {
            const fillTime = Date.now() - startTime;
            if (fillTime < this.timeThreshold) {
                e.preventDefault();
                this.logSpamAttempt('Form filled too quickly', { fillTime });
                alert('Please take your time filling out the form.');
                return false;
            }
        });
    }

    // Rate limiting by IP (client-side approximation)
    addRateLimiting() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            const now = Date.now();
            const userIP = this.getUserIP();
            const userSubmissions = this.submissions[userIP] || [];
            
            // Remove submissions older than 1 hour
            const recentSubmissions = userSubmissions.filter(time => now - time < 3600000);
            
            if (recentSubmissions.length >= this.maxSubmissions) {
                e.preventDefault();
                this.logSpamAttempt('Rate limit exceeded', { submissions: recentSubmissions.length });
                alert('Too many submissions. Please try again later.');
                return false;
            }
            
            // Add current submission
            recentSubmissions.push(now);
            this.submissions[userIP] = recentSubmissions;
            this.saveSubmissionsToStorage();
        });
    }

    // Enhanced input validation
    addInputValidation() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        // Email validation
        const emailField = form.querySelector('input[type="email"]');
        if (emailField) {
            emailField.addEventListener('blur', () => {
                const email = emailField.value;
                if (email && !this.isValidEmail(email)) {
                    emailField.setCustomValidity('Please enter a valid email address');
                } else {
                    emailField.setCustomValidity('');
                }
            });
        }

        // Phone validation
        const phoneField = form.querySelector('input[type="tel"]');
        if (phoneField) {
            phoneField.addEventListener('blur', () => {
                const phone = phoneField.value;
                if (phone && !this.isValidPhone(phone)) {
                    phoneField.setCustomValidity('Please enter a valid phone number');
                } else {
                    phoneField.setCustomValidity('');
                }
            });
        }

        // Message length validation
        const messageField = form.querySelector('textarea');
        if (messageField) {
            messageField.addEventListener('input', () => {
                const message = messageField.value;
                if (message.length < 10) {
                    messageField.setCustomValidity('Message must be at least 10 characters long');
                } else if (message.length > 2000) {
                    messageField.setCustomValidity('Message must be less than 2000 characters');
                } else {
                    messageField.setCustomValidity('');
                }
            });
        }
    }

    // CSRF protection
    addCSRFProtection() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const token = this.generateCSRFToken();
        const tokenField = document.createElement('input');
        tokenField.type = 'hidden';
        tokenField.name = 'csrf_token';
        tokenField.value = token;
        form.appendChild(tokenField);
    }

    // Form submission handler
    handleFormSubmission(formData) {
        // Check honeypot
        if (formData.get(this.honeypotField)) {
            this.logSpamAttempt('Honeypot triggered');
            return { success: false, error: 'Invalid submission' };
        }

        // Additional server-side validation would go here
        return { success: true };
    }

    // Utility methods
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    getUserIP() {
        // This is a client-side approximation
        // Real IP detection should be done server-side
        return navigator.userAgent + navigator.language + screen.width + screen.height;
    }

    generateCSRFToken() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    getSubmissionsFromStorage() {
        try {
            const stored = localStorage.getItem('form_submissions');
            return stored ? JSON.parse(stored) : {};
        } catch {
            return {};
        }
    }

    saveSubmissionsToStorage() {
        try {
            localStorage.setItem('form_submissions', JSON.stringify(this.submissions));
        } catch (e) {
            console.warn('Could not save submissions to storage');
        }
    }

    logSpamAttempt(reason, data = {}) {
        // Log spam attempts for monitoring
        console.warn('Spam attempt detected:', reason, data);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'spam_attempt', {
                event_category: 'security',
                event_label: reason,
                custom_parameters: data
            });
        }
    }
}

// Initialize spam prevention when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SpamPrevention();
});

// Enhanced reCAPTCHA handling
function recaptchaDataCallback() {
    // reCAPTCHA was completed successfully
    if (typeof gtag !== 'undefined') {
        gtag('event', 'recaptcha_complete', {
            event_category: 'security',
            event_label: 'contact_form'
        });
    }
}

function recaptchaExpiredCallback() {
    // reCAPTCHA expired
    if (typeof gtag !== 'undefined') {
        gtag('event', 'recaptcha_expired', {
            event_category: 'security',
            event_label: 'contact_form'
        });
    }
} 