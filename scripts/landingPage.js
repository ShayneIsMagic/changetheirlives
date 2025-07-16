const checkMessage = document.getElementById("check-message-wrapper");

function checkClick() {
  if (
    checkMessage.style.display == "" ||
    checkMessage.style.display == "block"
  ) {
    checkMessage.style.display = "none";
  } else {
    checkMessage.style.display = "block";
  }
}
