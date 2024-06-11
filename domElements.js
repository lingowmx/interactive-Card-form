//input elements
export const inputElements = {
  inputMonth: document.querySelector("#month"),
  inputYear: document.querySelector("#year"),
  inputPrivate: document.querySelector("#private"),
  inputCardNumber: document.querySelector("#cardNumber"),
  inputName: document.querySelector("#name"),
};

//display elements
export const displayElements = {
  displayCardHolder: document.getElementById('displayCardHolderName'),
  displayCardNumber: document.getElementById('displayCardNumber'),
  displayExpDateMonth: document.getElementById('displayExpirationDateMonth'),
  displayExpDateYear: document.getElementById('displayExpirationDateYear'),
  displayCVC: document.getElementById('displaycvc'),
}
//required Error elements
export const requiredErrorElements = {
  name: document.querySelector("#required-name"),
  cardNumber: document.querySelector("#required-cardNumber"),
  expDate: document.querySelector("#required-date"),
  password: document.querySelector("#required-password"),
};

//module
export const successModule = document.querySelector(".success-module");
//form
export const form = document.querySelector('form');

//buttons
export const button = document.querySelector(".primary-button");
