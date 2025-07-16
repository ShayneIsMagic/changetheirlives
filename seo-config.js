// SEO and Analytics Configuration for Change Their Lives
const SEOConfig = {
    // Primary Keywords (High Search Volume)
    primaryKeywords: [
        'nonprofit organizations',
        'charitable giving',
        'donate to charity',
        'volunteer opportunities',
        'community development',
        'education programs',
        'technology training',
        'workforce development',
        'rural development',
        'social impact'
    ],

    // Secondary Keywords (Medium Search Volume)
    secondaryKeywords: [
        'apprenticeship programs',
        'mentorship opportunities',
        'tech careers',
        'underved communities',
        'educational resources',
        'career training',
        'community support',
        'philanthropy',
        'social change',
        'empowerment programs'
    ],

    // Long-tail Keywords (Specific Intent)
    longTailKeywords: [
        'donate to education nonprofit',
        'volunteer as tech mentor',
        'support rural community development',
        'technology training for underserved communities',
        'apprenticeship programs for tech careers',
        'mentorship programs for career development',
        'charitable giving for education',
        'community development organizations',
        'workforce development programs',
        'social impact organizations'
    ],

    // Page-specific keywords
    pageKeywords: {
        home: [
            'Change Their Lives nonprofit',
            'empowering communities through education',
            'technology sector opportunities',
            'rural America development',
            'educational skills gap'
        ],
        about: [
            'about Change Their Lives',
            'nonprofit mission',
            'board members',
            'organization history',
            'community impact'
        ],
        contact: [
            'contact Change Their Lives',
            'donate now',
            'volunteer opportunities',
            'get involved',
            'support our mission'
        ],
        sponsors: [
            'sponsor Change Their Lives',
            'corporate partnerships',
            'foundation grants',
            'sponsorship opportunities',
            'support our programs'
        ],
        partners: [
            'partnership opportunities',
            'strategic partners',
            'program partners',
            'collaboration opportunities',
            'community partnerships'
        ]
    },

    // Google Analytics 4 Configuration
    analytics: {
        measurementId: 'GA_MEASUREMENT_ID', // Replace with actual GA4 ID
        customDimensions: {
            userType: 'cd1',
            donationIntent: 'cd2',
            volunteerIntent: 'cd3',
            pageSection: 'cd4'
        },
        customMetrics: {
            timeOnPage: 'cm1',
            scrollDepth: 'cm2',
            formInteractions: 'cm3'
        },
        events: {
            // Engagement Events
            pageView: {
                category: 'engagement',
                action: 'page_view',
                label: 'page_title'
            },
            scrollDepth: {
                category: 'engagement',
                action: 'scroll',
                label: 'scroll_percentage'
            },
            timeOnPage: {
                category: 'engagement',
                action: 'time_on_page',
                label: 'time_seconds'
            },
            
            // Conversion Events
            donationClick: {
                category: 'conversion',
                action: 'donation_click',
                label: 'donation_amount'
            },
            volunteerClick: {
                category: 'conversion',
                action: 'volunteer_click',
                label: 'volunteer_type'
            },
            contactFormSubmit: {
                category: 'conversion',
                action: 'contact_form_submit',
                label: 'form_type'
            },
            
            // User Journey Events
            videoPlay: {
                category: 'engagement',
                action: 'video_play',
                label: 'video_title'
            },
            downloadResource: {
                category: 'engagement',
                action: 'download',
                label: 'resource_name'
            },
            socialShare: {
                category: 'engagement',
                action: 'social_share',
                label: 'platform'
            }
        }
    },

    // SEO Meta Tags Generator
    generateMetaTags: function(page, customData = {}) {
        const baseUrl = 'https://changetheirlives.org';
        const defaultData = {
            title: 'Change Their Lives - Empowering Communities Through Education & Technology',
            description: 'Change Their Lives is a non-profit organization committed to transforming lives through education and work opportunities. We bridge the educational and skills gap, opening doors to advanced careers in the technology sector for underserved communities.',
            keywords: this.primaryKeywords.join(', '),
            image: `${baseUrl}/assets/images/banner-image.png`,
            url: `${baseUrl}/${page === 'home' ? '' : page}`
        };

        const data = { ...defaultData, ...customData };

        return {
            title: data.title,
            meta: [
                { name: 'description', content: data.description },
                { name: 'keywords', content: data.keywords },
                { name: 'author', content: 'Change Their Lives' },
                { name: 'robots', content: 'index, follow' },
                { name: 'language', content: 'English' },
                { name: 'revisit-after', content: '7 days' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: data.url },
                { property: 'og:title', content: data.title },
                { property: 'og:description', content: data.description },
                { property: 'og:image', content: data.image },
                { property: 'og:site_name', content: 'Change Their Lives' },
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:url', content: data.url },
                { property: 'twitter:title', content: data.title },
                { property: 'twitter:description', content: data.description },
                { property: 'twitter:image', content: data.image }
            ]
        };
    },

    // Structured Data Generator
    generateStructuredData: function(type, data = {}) {
        const baseData = {
            '@context': 'https://schema.org',
            '@type': type,
            'name': 'Change Their Lives',
            'url': 'https://changetheirlives.org',
            'logo': 'https://changetheirlives.org/assets/images/devpipeline-logo.svg',
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': '518 E 800 N Suite D',
                'addressLocality': 'Orem',
                'addressRegion': 'UT',
                'postalCode': '84097',
                'addressCountry': 'US'
            },
            'contactPoint': {
                '@type': 'ContactPoint',
                'email': 'info@changetheirlives.org',
                'contactType': 'customer service'
            },
            'sameAs': [
                'https://www.linkedin.com/company/change-their-lives/',
                'https://www.facebook.com/people/Change-Their-Lives/61555553176499/',
                'https://www.instagram.com/change.their.lives/'
            ]
        };

        return { ...baseData, ...data };
    },

    // Performance Monitoring
    performance: {
        // Core Web Vitals thresholds
        thresholds: {
            lcp: 2500, // Largest Contentful Paint (ms)
            fid: 100,  // First Input Delay (ms)
            cls: 0.1   // Cumulative Layout Shift
        },
        
        // Track performance metrics
        trackPerformance: function() {
            if ('PerformanceObserver' in window) {
                // Track LCP
                new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'performance', {
                            event_category: 'web_vitals',
                            event_label: 'lcp',
                            value: Math.round(lastEntry.startTime)
                        });
                    }
                }).observe({ entryTypes: ['largest-contentful-paint'] });

                // Track FID
                new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'performance', {
                                event_category: 'web_vitals',
                                event_label: 'fid',
                                value: Math.round(entry.processingStart - entry.startTime)
                            });
                        }
                    });
                }).observe({ entryTypes: ['first-input'] });

                // Track CLS
                new PerformanceObserver((list) => {
                    let clsValue = 0;
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'performance', {
                            event_category: 'web_vitals',
                            event_label: 'cls',
                            value: Math.round(clsValue * 1000) / 1000
                        });
                    }
                }).observe({ entryTypes: ['layout-shift'] });
            }
        }
    },

    // Search Console Integration
    searchConsole: {
        // Track search queries
        trackSearchQuery: function(query) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'search', {
                    search_term: query
                });
            }
        },

        // Track internal search
        trackInternalSearch: function(query, results) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'search', {
                    event_category: 'internal_search',
                    search_term: query,
                    results: results
                });
            }
        }
    },

    // Social Media Tracking
    socialMedia: {
        trackSocialShare: function(platform, url) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'share', {
                    method: platform,
                    content_type: 'page',
                    item_id: url
                });
            }
        },

        trackSocialClick: function(platform) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'social',
                    event_label: platform
                });
            }
        }
    }
};

// Initialize SEO and Analytics
document.addEventListener('DOMContentLoaded', function() {
    // Track page performance
    SEOConfig.performance.trackPerformance();
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0 && typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: `${maxScroll}%`
                });
            }
        }
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                name: 'page_view',
                value: timeOnPage
            });
        }
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOConfig;
} 