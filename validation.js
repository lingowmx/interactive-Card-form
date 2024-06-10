const redError = getComputedStyle(document.documentElement).getPropertyValue('--red-error').trim();
const normalGray = getComputedStyle(document.documentElement).getPropertyValue('--normal-gray').trim();
//validate Email
const validateEmail = () => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

//validate Form
export const validateForm = (inputElement, inputValue, errorElement, minlength = 0, maxlength = Infinity) => {
  let isValid = true;
  if (inputElement.type === "email") {
    isValid = validateEmail(inputValue);
  } else {
    isValid = inputValue.length > 0;
  }
  if(inputValue.length < minlength || inputValue.length > maxlength){
    showError(inputElement, errorElement)
    return false
  }else{
    hideError(inputElement, errorElement)
    return true
  }
};

//show Error function
const showError = (inputElement, errorElement) => {
  inputElement.style.border = `1px solid ${redError}`;
  errorElement.style.display = "block";
};
//hide Error Function
const hideError = (inputElement, errorElement) => {
  inputElement.style.border = `1px solid ${normalGray}`;
  errorElement.style.display = "none";
};
