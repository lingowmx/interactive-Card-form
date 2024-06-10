import {
  requiredErrorElements,
  inputElements,
  successModule,
  form,
  button,
} from "./domElements.js";
import { validateForm } from "./validation.js";

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
      16,
      16
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
});

console.log("hola");
