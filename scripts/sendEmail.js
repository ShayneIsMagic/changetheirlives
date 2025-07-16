document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const recaptcha = document.querySelector(".g-recaptcha");
  const submitButton = form.querySelector("button[type='submit']");
  let completedRecaptcha = false;

  recaptcha.style.display = "none";
  submitButton.disabled = true;

  form.addEventListener("keyup", function (e) {
    e.preventDefault();
    checkSubmitButtonStatus();
    recaptcha.style.display = "flex";
  });

  function recaptchaDataCallback() {
    completedRecaptcha = true;
    checkSubmitButtonStatus();
  }

  function recaptchaExpiredCallback() {
    completedRecaptcha = false;
    checkSubmitButtonStatus();
  }

  window.recaptchaDataCallback = recaptchaDataCallback;
  window.recaptchaExpiredCallback = recaptchaExpiredCallback;

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length > 0) {
      submitForm();
    } else {
      console.error("Please complete the reCAPTCHA verification");
    }
  });

  function displayToast(message) {
    const toast = document.querySelector(".toast-container");
    toast.innerText = message;
    toast.style.animation = "fadeOut 7s";
    toast.style.display = "flex";
    setTimeout(() => {
      toast.style.display = "none";
      toast.style.animation = "";
    }, 7000);
  }

  function checkSubmitButtonStatus() {
    const formInputChanged = Array.from(form.elements)
      .filter((element) => element.required)
      .every((element) =>
        (element.tagName === "INPUT" || element.tagName === "TEXTAREA") &&
        element.required &&
        element.value !== "" &&
        element.contentType !== "checkbox" &&
        completedRecaptcha
          ? true
          : false
      );

    if (formInputChanged === true) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  function submitForm() {
    const formData = new FormData(form);

    const emailData = {};
    formData.forEach((value, key) => {
      emailData[key] = value;
    });

    const checkboxFields = [
      "ways-to-donate",
      "our-mission",
      "our-sponsors",
      "becoming-a-sponsor",
      "who-we-are",
      "volunteering",
    ];
    checkboxFields.forEach((field) => {
      emailData[field] = formData.has(field) ? "Yes" : "No";
    });

    formData.append("service_id", "service_s65oft8");
    formData.append("template_id", "template_9wj6zo7");
    formData.append("user_id", "pMWhDMlLG98iFrOmg");

    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("text/plain; charset=utf-8")) {
          return response.text();
        } else {
          console.error("Unexpected response type:", contentType);
          throw new Error("Unexpected response type");
        }
      })
      .then(() => {
        displayToast("Email Sent");
        grecaptcha.reset();
        form.reset();
        completedRecaptcha = false;
        submitButton.disabled = true;
        recaptcha.style.display = "none";
      })
      .catch((error) => {
        console.error("There was a problem sending the email:", error);
        alert("There was a problem sending the email. Please try again later.");
        completedRecaptcha = false;
        submitButton.disabled = false;
        recaptcha.style.display = "none";
      });
  }
});
