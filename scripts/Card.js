export class Card {
  constructor(data, templateSelector, cardPopupImage) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._cardPopupImage = cardPopupImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    //console.log(cardElement);
    return cardElement;
  }

  createCard() {
    this._card = this._getTemplate();

    this._card.querySelector(".element__title").textContent = this._name;
    this._card.querySelector(".element__image").src = this._link;

    this._likeButton = this._card.querySelector(".element__like-button");

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._deleteButton = this._card.querySelector(".element__delite-button");
    this._deleteButton.addEventListener("click", () => {
      console.log(this._deleteCard());
      this._deleteCard();
    });

    this._likeButton.addEventListener("click", () => {
      console.log(this._likeCard);
      this._likeCard();
    });

    this._cardPopupImage = this._card.querySelector(".element__image");
    this._cardPopupImage.addEventListener("click", () => {
      this._imageSubmit();
    });

    
  }

  _deleteCard() {
    this._card.remove();
  }

  _likeCard() {
    this._likeButton.classList.toggle("element__like-icon_active");
  }

  _imageSubmit() {
    showImage( this._name ,this._link);
  }
}

function showImage(title, url) {
  popupTitle.textContent = title;
  image.src = url;
  image.alt = title;
  console.log(popupTitle);
  openPopup(openImagePopup);
}

// function imageSubmits(event) {
//   image.src = event.target.src;
//   image.setAttribute("alt", this._name.textContent);
//   this._name.textContent = event.target
//     .closest(".element")
//     .querySelector(".element__title").textContent;
//   openPopup(openImagePopup);
// }
// console.log(imageSubmits);

const image = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");

const openImagePopup = document.querySelector("#imagePopup");
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", escClosePopup);
  document.addEventListener("mousedown", overlayClosePopup);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", escClosePopup);
  document.removeEventListener("mousedown", overlayClosePopup);
}

function escClosePopup(evt) {
  if (evt.key === "Escape") {
    evt.target.blur();
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function overlayClosePopup(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

console.log(image);
