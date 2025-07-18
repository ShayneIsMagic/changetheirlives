const header = document.querySelector(".header-container");

const loadHeaderComp = async () => {
  const res = await fetch("../core/header.html");
  const template = await res.text();
  header.innerHTML = template;

  const navLinks = document.querySelector(".navbar-links-wrapper");
  const hamburgerDiv = document.querySelector(".hamburger-icon");

  hamburgerDiv.addEventListener("click", () => {
    navLinks.classList.toggle("hide");
  });
};

loadHeaderComp();
