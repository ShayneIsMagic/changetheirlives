const header = document.querySelector(".header-container");

const loadHeaderComp = async () => {
  // Determine the correct path based on current location
  const isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
  const headerPath = isRoot ? "core/header.html" : "../core/header.html";
  
  try {
    const res = await fetch(headerPath);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const template = await res.text();
    header.innerHTML = template;

    // Initialize mobile menu functionality
    const navLinks = document.querySelector(".navbar-links-wrapper");
    const hamburgerDiv = document.querySelector(".hamburger-icon");

    if (hamburgerDiv && navLinks) {
      hamburgerDiv.addEventListener("click", () => {
        navLinks.classList.toggle("hide");
      });
    }
  } catch (error) {
    console.error("Error loading header:", error);
                    // Fallback header content
                header.innerHTML = `
                  <header class="header">
                    <div class="header-wrapper">
                      <div class="title-logo-wrapper">
                        <a href="${isRoot ? 'index.html' : '../index.html'}">
                          <img src="${isRoot ? 'assets/images/change-their-lives-logo.jpg' : '../assets/images/change-their-lives-logo.jpg'}" alt="Change Their Lives Logo" width="120" height="44" />
                        </a>
                      </div>
                      <nav class="navbar">
                        <div class="navbar-links-wrapper hide">
                          <div class="navbar-links">
                            <a href="${isRoot ? 'pages/about.html' : 'about.html'}">About Us</a>
                            <a href="${isRoot ? 'pages/contact.html' : 'contact.html'}">Contact Us</a>
                            <a href="${isRoot ? 'pages/sponsors.html' : 'sponsors.html'}">Our Sponsors</a>
                            <a href="${isRoot ? 'pages/partners.html' : 'partners.html'}">Our Partners</a>
                          </div>
                          <div class="navbar-button">
                            <button class="outline-button" onclick="window.location.href = '${isRoot ? 'pages/contact.html' : 'contact.html'}'">
                              Donate Today
                            </button>
                          </div>
                        </div>
                        <div class="hamburger-icon">
                          <a>
                            <i class="fa-solid fa-bars"></i>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </header>
                `;
  }
};

loadHeaderComp();
