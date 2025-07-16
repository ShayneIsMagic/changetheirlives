const testimonialsCarousel = () => {
  let cardIndex = 0;

  const previousCard = () => {
    cardIndex -= 1;
    showCards();
  };

  const nextCard = () => {
    cardIndex += 1;
    showCards();
  };

  const goToCard = (i) => {
    cardIndex = i;
    showCards();
  };

  const cards = document.querySelectorAll(".partnership-content");
  const carouselButtons = document.querySelectorAll(
    ".partnership-content-wrapper > button"
  );
  const leftButton = carouselButtons[0];
  const rightButton = carouselButtons[1];
  const dots = document.querySelectorAll(".dots > i");

  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    dot.addEventListener("click", () => goToCard(i));
  }

  leftButton.addEventListener("click", () => previousCard());
  rightButton.addEventListener("click", () => nextCard());

  const showCards = () => {
    if (cardIndex >= cards.length) {
      cardIndex = 0;
    } else if (cardIndex < 0) {
      cardIndex = cards.length - 1;
    }

    for (const card of cards) {
      card.classList.add("hide");
    }

    for (const dot of dots) {
      dot.classList.remove("active");
    }

    cards[cardIndex].classList.remove("hide");
    dots[cardIndex].classList.add("active");
  };

  showCards();
};

testimonialsCarousel();
