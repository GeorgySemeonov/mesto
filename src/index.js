

import { FormValidator } from "../FormValidator.js";
import { Card } from "../Card.js";
import '../pages/index.css';

import dombayImage from '../images/dombay.jpg';
import karachaevskImage from '../images/karachaevsk.jpg';
import еlbrusImage from '../images/еlbrus-mountain.jpg';
import volgogradImage from '../images/volgograd.jpg';
import parisImage from '../images/paris.jpg';
import petersburgImage from '../images/saint-petersburg.jpg';




const validationConfig = {
  formSelector: ".popup__forms",
  inputSelector: ".popup__form",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_active",

  errorClassTemplate: ".popup__input-error_type_",
  errorClass: "popup__input-error",

  inputTypeErrorBorder: "popup__input_border_error",
};

const initialCards = [
  {
    name: "Домбай",
    link: dombayImage
  },
  {
    name: "Карачаевск",
    link: karachaevskImage
  },
  {
    name: "Эльбрус",
    link: еlbrusImage
  },
  {
    name: "Волгоград",
    link: volgogradImage
  },
  {
    name: "Париж",
    link: parisImage
  },
  {
    name: "Санкт-Петербург",
    link: petersburgImage
  },
];

const cardsList = document.querySelector(".elements__list");

function renderCard(item) {
  const cardItem = new Card(item, "#cardTamplate", showImage);
  const newCard = cardItem.createCard();
  cardsList.prepend(newCard);

  // return cardItem.createNewCard;
}

initialCards.forEach((item) => {
  renderCard(item);
});

function showImage(title, url) {
  popupTitle.textContent = title;
  image.src = url;
  image.alt = title;

  openPopup(openImagePopup);
}

// console.log(showImage);

const popup = document.querySelector(".popup");

const editProfileButton = document.querySelector(".profile__edit");
const profilePopup = document.querySelector("#profilePopup");
const createCardButton = document.querySelector(".profile__add-button");
const createCardPopup = document.querySelector("#cardPopup");
const openImagePopup = document.querySelector("#imagePopup");

const closeButtons = document.querySelectorAll(".popup__close");
const userName = document.querySelector(".profile__title");
const userOccupation = document.querySelector(".profile__subtitle");
const userNameForm = document.querySelector("#userNameForm");
const userOccupationForm = document.querySelector("#userOccupationForm");
const formElement = document.querySelector("#popupForms");

// const cardsList = document.querySelector(".elements__list");
const popupFormsCard = document.querySelector("#popupFormsCard");

const image = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");

const nameCard = document.querySelector("#nameCard");
const imageLink = document.querySelector("#imageLink");

editProfileButton.addEventListener("click", () => {
  userNameForm.value = userName.textContent;
  userOccupationForm.value = userOccupation.textContent;

  openPopup(profilePopup);
});

createCardButton.addEventListener("click", () => {
  openPopup(createCardPopup);
  
});

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

const submitButtonCard = popupFormsCard.querySelector("#createButton");

// function disableButtonSubmit(submitButtonCard) {
//   submitButtonCard.disabled = true;
// }

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function submitEditProfileForm(evt) {
  evt.preventDefault();
  userName.textContent = userNameForm.value;
  userOccupation.textContent = userOccupationForm.value;

  closePopup(profilePopup);
}

formElement.addEventListener("submit", submitEditProfileForm);

// const createCard = (card) => {
//   const cardTamplate = document
//     .querySelector("#cardTamplate")
//     .content.cloneNode(true);
//   const cardHeading = cardTamplate.querySelector(".element__title");
//   cardHeading.textContent = card.name;
//   const cardImage = cardTamplate.querySelector(".element__image");
//   cardImage.setAttribute("src", card.link);
//   cardImage.setAttribute("alt", card.name);
//   const deliteButton = cardTamplate.querySelector(".element__delite-button");
//   deliteButton.addEventListener("click", deliteCard);
//   const likeButton = cardTamplate.querySelector(".element__like-button");
//   likeButton.addEventListener("click", likeCard);
//   cardImage.addEventListener("click", imageSubmit);

//   return cardTamplate;
// };

// const renderCard = (card, cardsList) => {
//   const cardElement = createCard(card);
//   cardsList.prepend(cardElement);
// };

// initialCards.forEach((card) => {
//   renderCard(card, cardsList);
// });

//function deliteCard(event) {
// const button = event.target;
//  const card = button.closest(".element");
// card.remove();
//}

popupFormsCard.addEventListener("submit", cardFormSubmit);

function cardFormSubmit(event) {
  event.preventDefault();
  const popupFormsCard = event.target;
  const card = {
    name: nameCard.value,
    link: imageLink.value,
  };

  renderCard(card, popupFormsCard);
  closePopup(cardPopup);
  event.target.reset();
  // this._disableButton(submitButtonCard, validationConfig);
}

// initialCards.push(cardFormSubmit);

//function likeCard(event) {
//  event.target.classList.toggle("element__like-icon_active");
//}

const profileValidator = new FormValidator(validationConfig, profilePopup);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig,createCardPopup);
addCardValidator.enableValidation();
