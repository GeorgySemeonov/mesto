export class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;

    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;

    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._inputErrorClass = validationConfig.inputErrorClass;
    this._activeErrorClass = validationConfig.activeErrorClass;

    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  }

  _showInputError = (input, validationMessage) => {
    const errorText = this._formElement.querySelector(`.${input.name}-error`);
    errorText.textContent = validationMessage;
    errorText.classList.add(this._activeErrorClass);
    input.classList.add(this._inputErrorClass);

    // erorTextElement.textContent = validationMessage;
    // erorTextElement.classList.add(errorClass);
  };

  _hideInputError = (input) => {
    errorText.classList.remove(this._activeErrorClass);
    errorText.textContent = "";
    input.classList.remove(this._inputErrorClass);

    // erorTextElement.classList.remove(errorClass);
    // erorTextElement.textContent = "";
  };

  _enableButton = () => {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;

    // submitButton.classList.add(inactiveButtonClass);
    // submitButton.disabled = false;
  };

  _disableButton = () => {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;

    // submitButton.classList.remove(inactiveButtonClass);
    // submitButton.disabled = true;
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
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
    this._setEventListeners();
  }
}
