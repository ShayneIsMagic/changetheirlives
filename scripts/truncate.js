document.addEventListener("DOMContentLoaded", function () {
  const memberCards = document.querySelectorAll(".member-card");

  memberCards.forEach((memberCard) => {
    const bio = memberCard.querySelector(".bio");
    const readMoreBtn = memberCard.querySelector(".read-more-btn");

    const isTruncated =
      bio.scrollHeight > bio.clientHeight ||
      bio.scrollHeight === bio.clientHeight;

    const toggleTruncate = () => {
      const isOpen = bio.classList.toggle("open");
      readMoreBtn.textContent = isOpen ? "Read less" : "Read more";
    };

    if (!isTruncated) {
      readMoreBtn.style.display = "none";
    }

    readMoreBtn.addEventListener("click", toggleTruncate);
  });
});
