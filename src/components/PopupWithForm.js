import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);

        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__forms');
        this._inputList = this._popup.querySelectorAll('.popup__form');

        this._submitButton = this._popup.querySelector('.popup__button');
        this._submitButtonText = this._submitButton.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(
            (input) => this._formValues[input.name] = input.value);

        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();

        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
        })
        
    }

    close() {
        super.close();
        this._form.reset();
    }

    loading(save) {
        if (save) {
            
            this._submitButton.textContent = 'Сохранение...';
            this._submitButton.classList.add('popup__button_loading');
        } else {
            this._submitButton.textContent = this._submitButtonText;
            this._submitButton.classList.remove('popup__button_loading');
        }
    }

}