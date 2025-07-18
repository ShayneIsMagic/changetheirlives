const footer = document.querySelector(".footer-container");

const loadFooterComp = async () => {
  const res = await fetch("../core/footer.html");
  const template = await res.text();
  footer.innerHTML = template;
};

loadFooterComp();
