const toggleAnswer = (answer, arrowIcon) => {
  answer.classList.toggle("hide");
  arrowIcon.classList.toggle("fa-angle-up");
  arrowIcon.classList.toggle("fa-angle-down");
};

const questions = document.querySelectorAll(".faqs-question");
const answers = document.querySelectorAll(".faqs-answer");
const arrowIcons = document.querySelectorAll(".faqs-question > i");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () =>
    toggleAnswer(answers[i], arrowIcons[i])
  );
}
