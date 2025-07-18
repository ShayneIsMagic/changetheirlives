const footer = document.querySelector(".footer-container");

const loadFooterComp = async () => {
  // Determine the correct path based on current location
  const isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
  const footerPath = isRoot ? "core/footer.html" : "../core/footer.html";
  
  try {
    const res = await fetch(footerPath);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const template = await res.text();
    footer.innerHTML = template;
  } catch (error) {
    console.error("Error loading footer:", error);
                    // Fallback footer content
                footer.innerHTML = `
                  <footer class="footer">
                    <div class="footer-wrapper">
                      <div class="footer-logo-wrapper">
                        <a href="${isRoot ? 'index.html' : '../index.html'}">
                          <img src="${isRoot ? 'assets/images/change-their-lives-logo.jpg' : '../assets/images/change-their-lives-logo.jpg'}" alt="Change Their Lives Logo" width="120" height="44">
                        </a>
                      </div>
                      <div class="footer-links">
                        <button onclick="window.location.href = '${isRoot ? 'pages/contact.html' : 'contact.html'}'">
                          Donate Now
                        </button>
                        <a>Become a Mentor</a>
                        <a href="${isRoot ? 'pages/about.html' : 'about.html'}">About Us</a>
                        <a href="${isRoot ? 'pages/contact.html' : 'contact.html'}">Contact Us</a>
                        <a href="${isRoot ? 'pages/sponsors.html' : 'sponsors.html'}">Our Sponsors</a>
                        <a href="${isRoot ? 'pages/partners.html' : 'partners.html'}">Our Partners</a>
                      </div>
                      <div class="social-media-links">
                        <a target="_blank" href="https://www.facebook.com/people/Change-Their-Lives/61555553176499/">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/change.their.lives/">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/change-their-lives/">
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a>
                          <i class="fa-brands fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                    <div class="footer-bottom">
                      <div class="footer-bottom-links">
                        <h4>© 2024 Change Their Lives. All rights reserved.</h4>
                        <div class="privacy-links">
                          <a>Privacy Policy</a>
                          <a>Terms and Conditions</a>
                          <a>Cookie Policy</a>
                        </div>
                      </div>
                      <h6>
                        Website Created and Donated by
                        <a target="_blank" href="https://devpipeline.com/">DevPipeline</a>
                      </h6>
                    </div>
                  </footer>
                `;
  }
};

loadFooterComp();
