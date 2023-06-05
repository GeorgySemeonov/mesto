// const validationConfig = {
//   formSelector: ".popup__forms",
//   inputSelector: ".popup__form",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_active",

//   errorClassTemplate: ".popup__input-error_type_",
//   errorClass: "popup__input-error",

//   inputTypeErrorBorder: "popup__input_border_error",
// };

export class FormValidator {
  constructor(validationConfig, formSelector) {
    this._validationConfig = validationConfig;
    this._formElement = formSelector;

    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;

    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._inputErrorClass = validationConfig.errorClassTemplate;
    this._activeErrorClass = validationConfig.errorClass;

    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  }

  _showInputError = (input, errorText) => {
    
    errorText.textContent = input.validationMessage;
    errorText.classList.add(this._activeErrorClass);
    input.classList.add(this._inputErrorClass);
  };

  _hideInputError = (input, errorText) => {

    errorText.textContent = "";
    errorText.classList.remove(this._activeErrorClass);
    input.classList.remove(this._inputErrorClass);
  };

  _enableButton = () => {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  };

  _disableButton = () => {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  };

  _checkInputValidity = (input) => {
    const errorText = this._formElement.querySelector(`.${input.name}-error`);
    console.log(errorText);
    if (!input.validity.valid) {
      this._showInputError(input, errorText);
      // console.log(errorText);
    } else {
      console.log("validno");
      this._hideInputError(input, errorText);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((input) => !input.validity.valid);
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };
  _setEventListeners = () => {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
