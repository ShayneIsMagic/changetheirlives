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
          <div class="logo-wrapper">
            <a href="${isRoot ? 'index.html' : '../index.html'}">
              <img src="${isRoot ? 'assets/images/devpipeline-logo.svg' : '../assets/images/devpipeline-logo.svg'}" alt="Change Their Lives Logo" />
            </a>
          </div>
          <nav class="navbar">
            <div class="navbar-links-wrapper">
              <a href="${isRoot ? 'index.html' : '../index.html'}" class="nav-link">Home</a>
              <a href="${isRoot ? 'pages/about.html' : 'about.html'}" class="nav-link">About</a>
              <a href="${isRoot ? 'pages/sponsors.html' : 'sponsors.html'}" class="nav-link">Sponsors</a>
              <a href="${isRoot ? 'pages/partners.html' : 'partners.html'}" class="nav-link">Partners</a>
              <a href="${isRoot ? 'pages/contact.html' : 'contact.html'}" class="nav-link">Contact</a>
            </div>
            <div class="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
    `;
  }
};

loadHeaderComp();
