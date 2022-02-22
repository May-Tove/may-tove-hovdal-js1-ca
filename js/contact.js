const form = document.querySelector("form");

const yourName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

const submitMessage = document.querySelector("#submit-message");
const submitButton = document.querySelector("button");

function validateForm(event) {
  event.preventDefault();

  if (inputLength(yourName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (inputLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (inputLength(address.value, 24) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

submitButton.onclick = function () {
  if (
    inputLength(yourName.value, 0) &&
    inputLength(subject.value, 9) &&
    validateEmail(email.value) &&
    inputLength(address.value, 24)
  ) {
    submitMessage.innerHTML = `<div class="submit-message">Your information is submitted</div>`;
    form.reset();
  } else {
    submitMessage.innerHTML = "";
  }
};

function inputLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
