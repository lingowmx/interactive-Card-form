import {
  requiredErrorElements,
  inputElements,
  successModule,
  form,
  button,
} from "./domElements.js";
import { validateForm } from "./validation.js";
import { displayElements } from "./domElements.js";

//display card holder
inputElements.inputName.addEventListener("input", function (event) {
  displayElements.displayCardHolder.textContent =
    event.target.value || "CARD HOLDER NAME";
});
//display card number
inputElements.inputCardNumber.addEventListener("input", function (event) {
  let cardNumber = event.target.value.replace(/\s/g, "");
  cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ").trim();
  event.target.value = cardNumber;
  displayElements.displayCardNumber.textContent =
    cardNumber || "1234 5678 9012 3456";
});
//display exp date MONTH
inputElements.inputMonth.addEventListener("input", function (event) {
  displayElements.displayExpDateMonth.textContent = event.target.value || "MM";
});
//display exp date YEAR
inputElements.inputYear.addEventListener("input", function (event) {
  displayElements.displayExpDateYear.textContent = event.target.value || "YY";
});
//display cvc
inputElements.inputPrivate.addEventListener("input", function (event) {
  displayElements.displayCVC.textContent = event.target.value || "123";
});

button.addEventListener("click", (event) => {
  event.preventDefault();

  let allValid = true;
  allValid =
    validateForm(
      inputElements.inputName,
      inputElements.inputName.value,
      requiredErrorElements.name,
      5,
      30
    ) && allValid;
  allValid =
    validateForm(
      inputElements.inputCardNumber,
      inputElements.inputCardNumber.value,
      requiredErrorElements.cardNumber,
      19,
      19
    ) && allValid;
  allValid =
    validateForm(
      inputElements.inputYear,
      inputElements.inputYear.value,
      requiredErrorElements.expDate,
      2,
      2
    ) && allValid;
  allValid =
    validateForm(
      inputElements.inputMonth,
      inputElements.inputMonth.value,
      requiredErrorElements.expDate,
      2,
      2
    ) && allValid;
  allValid =
    validateForm(
      inputElements.inputPrivate,
      inputElements.inputPrivate.value,
      requiredErrorElements.password,
      3,
      3
    ) && allValid;
  if (allValid) {
    successModule.style.display = "block";
    form.style.display = "none";
    button.style.display = "none";
  }
});

console.log("hola");
