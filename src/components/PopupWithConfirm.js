import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        //this._form = this._popup.querySelector('.popup__forms');
        
        this._submitButton = this._popup.querySelector('#confirmButton');
    }

    submitCallback(sub) {
        this._handleSubmit = sub;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }
}