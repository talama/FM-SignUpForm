const form = document.querySelector(".trial-form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.parentElement.classList.add("error");
    } else if (input.type == "email" && !validateEmail(input.value))
      input.parentElement.parentElement.classList.add("error");
    else input.parentElement.parentElement.classList.remove("error");
  });
});
// Adds error messages also on Tab and when the input field loses focus
inputs.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      checkInput(input);
    }
  });
  input.addEventListener("blur", () => {
    checkInput(input);
  });
});

function checkInput(input) {
  if (!input.value) {
    input.parentElement.parentElement.classList.add("error");
  } else if (input.type == "email" && !validateEmail(input.value))
    input.parentElement.parentElement.classList.add("error");
  else input.parentElement.parentElement.classList.remove("error");
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
