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
          <div class="footer-content">
            <div class="footer-section">
              <h3>Change Their Lives</h3>
              <p>Empowering communities through education and work opportunities.</p>
            </div>
            <div class="footer-section">
              <h4>Contact</h4>
              <p>518 E 800 N Suite D</p>
              <p>Orem, Utah 84097</p>
              <p>info@changetheirlives.org</p>
            </div>
            <div class="footer-section">
              <h4>Follow Us</h4>
              <div class="social-links">
                <a href="https://www.linkedin.com/company/change-their-lives/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/people/Change-Their-Lives/61555553176499/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/change.their.lives/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Change Their Lives. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
};

loadFooterComp();
