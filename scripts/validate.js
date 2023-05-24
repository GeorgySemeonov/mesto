


const showInputEror = (erorTextElement, validationMessage, errorClass) => {
  erorTextElement.textContent = validationMessage;
  erorTextElement.classList.add(errorClass);
};

const hideInputEror = (erorTextElement, errorClass) => {
  erorTextElement.classList.remove(errorClass);
  erorTextElement.textContent = "";
};

const enableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = false;
};

const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = true;
};

const checkInputValidaty = (
  input,
  errorClassTemplate,
  errorClass,
  inputTypeErrorBorder
) => {
  const erorTextElement = document.querySelector(
    `${errorClassTemplate}${input.name}`
  );
  //console.log(erorTextElement);
  if (!input.validity.valid) {
    showInputEror(
      erorTextElement,
      input.validationMessage,
      errorClass,
      inputTypeErrorBorder
    );
    input.classList.add(inputTypeErrorBorder);
  } else {
    hideInputEror(erorTextElement, inputTypeErrorBorder);
    input.classList.remove(inputTypeErrorBorder);
  }
};

const hasInvalidInput = (inputList) => {
  // console.log(inputList);
  return Array.from(inputList).some((input) => !input.validity.valid);
};

const toggleButtonState = (inputList, inactiveButtonClass, submitButton) => {
  // console.log(submitButton);
  if (!hasInvalidInput(inputList)) {
    // console.log("validno");
    enableButton(submitButton, inactiveButtonClass);
  } else {
    // console.log("ne validno");
    disableButton(submitButton, inactiveButtonClass);
  }
};

const setEventListeners = (
  inputList,
  { errorClassTemplate, errorClass, inputTypeErrorBorder, inactiveButtonClass },
  submitButton
) => {
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidaty(
        input,
        errorClassTemplate,
        inputTypeErrorBorder,
        errorClass
      );
      toggleButtonState(inputList, inactiveButtonClass, submitButton);
    });
  });
};

const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  ...config
}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    const inputList = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);

    setEventListeners(inputList, config, submitButton);

    form.addEventListener("reset", () => {
      disableButton(submitButton, config.inactiveButtonClass);
    });
  });
};

const validationConfig = {
  formSelector: ".popup__forms",
  inputSelector: ".popup__form",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_active",

  errorClassTemplate: ".popup__input-error_type_",
  errorClass: "popup__input-error",

  inputTypeErrorBorder: "popup__input_border_error",
};

enableValidation(validationConfig);
