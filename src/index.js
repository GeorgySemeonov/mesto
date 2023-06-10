import '../pages/index.css';

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

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


// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

const popupImage = new PopupWithImage('.popup_image-card');
popupImage.setEventListeners();


const cardsList = document.querySelector(".elements__list");

function renderCard(item) {
  const cardItem = new Card(item, "#cardTamplate", handleCardClick);
  const newCard = cardItem.createCard();
  cardsList.prepend(newCard);

  // return cardItem.createNewCard;
}

const handleCardClick = (name, link) => {
  popupImage.open(name, link);
}

const cardSection = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    cardSection.addItem(renderCard(item));
  }
}, '.elements');

cardSection.renderItems();



// initialCards.forEach((item) => {
//   renderCard(item);
// });

// function showImage(title, url) {
//   popupTitle.textContent = title;
//   image.src = url;
//   image.alt = title;

//   open(openImagePopup);
// }


const popupProfile = new PopupWithForm('#profilePopup', formSubmitProfile);
popupProfile.setEventListeners();

function formSubmitProfile(item) {
  profileInfo.setUserInfo(item);
  popupProfile.close();
};

const profileInfo = new UserInfo({
  profileName: '.profile__title',
  profileInfo: '.profile__subtitle'
});

const popupAddCards = new PopupWithForm('#cardPopup', formSubmitCards);
popupAddCards.setEventListeners();

function formSubmitCards(data) {
  console.log(data)
  cardSection.addItem(renderCard({
    title: data.title,
    link: data.link
  }));
  popupAddCards.close();
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

const popupFormsCard = document.querySelector("#popupFormsCard");

const image = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");

const nameCard = document.querySelector("#nameCard");
const imageLink = document.querySelector("#imageLink");

// editProfileButton.addEventListener("click", () => {
//   userNameForm.value = userName.textContent;
//   userOccupationForm.value = userOccupation.textContent;

//   open(profilePopup);
// });

editProfileButton.addEventListener('click', () => {
  const userInfo = profileInfo.getUserInfo();
  userNameForm.value = userInfo.name;
  userOccupationForm.value = userInfo.info;
  popupProfile.open();
});


createCardButton.addEventListener('click', () => {
  popupAddCards.open();
  addCardValidator.enableValidation();
});

// createCardButton.addEventListener("click", () => {
//   openPopup(createCardPopup);
// });

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", escClosePopup);
//   document.addEventListener("mousedown", overlayClosePopup);
// }
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", escClosePopup);
//   document.removeEventListener("mousedown", overlayClosePopup);
// }

// function escClosePopup(evt) {
//   if (evt.key === "Escape") {
//     evt.target.blur();
//     const popup = document.querySelector(".popup_opened");
//     closePopup(popup);
//   }
// }

// function overlayClosePopup(evt) {
//   if (evt.target.classList.contains("popup_opened")) {
//     closePopup(evt.target);
//   }
// }

// const submitButtonCard = popupFormsCard.querySelector("#createButton");

// closeButtons.forEach((button) => {
//   const popup = button.closest(".popup");
//   button.addEventListener("click", () => closePopup(popup));
// });

// function submitEditProfileForm(evt) {
//   evt.preventDefault();
//   userName.textContent = userNameForm.value;
//   userOccupation.textContent = userOccupationForm.value;

//   closePopup(profilePopup);
// }

// formElement.addEventListener("submit", submitEditProfileForm);

// popupFormsCard.addEventListener("submit", cardFormSubmit);

// function cardFormSubmit(event) {
//   event.preventDefault();
//   const popupFormsCard = event.target;
//   const card = {
//     name: nameCard.value,
//     link: imageLink.value,
//   };

//   renderCard(card, popupFormsCard);
//   closePopup(cardPopup);
//   event.target.reset();
// }

const profileValidator = new FormValidator(validationConfig, profilePopup);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, createCardPopup);
addCardValidator.enableValidation();