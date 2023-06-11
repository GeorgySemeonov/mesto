import "./index.css";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  editProfileButton,
  profilePopup,
  createCardButton,
  createCardPopup,
  userNameForm,
  userOccupationForm,
  validationConfig,
  initialCards,
} from "../utils/constants.js";


const popupImage = new PopupWithImage(".popup_image-card");
popupImage.setEventListeners();

// const cardsList = document.querySelector(".elements__list");

function createCard(item) {

  const cardItem = new Card(item, "#cardTamplate", handleCardClick);
  const newCard = cardItem.createCard();
  // cardsList.prepend(newCard);

  return newCard;
}

const handleCardClick = (name, link) => {
  popupImage.open(name, link);
};

const cardSection = new Section(
  {
    items: initialCards.reverse(),
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  ".elements__list"
);

cardSection.renderItems();

const popupProfile = new PopupWithForm("#profilePopup", handleProfileFormSubmit);
popupProfile.setEventListeners();

function handleProfileFormSubmit(item) {
  profileInfo.setUserInfo(item);
  popupProfile.close();
}

const profileInfo = new UserInfo({
  profileName: ".profile__title",
  profileDescription : ".profile__subtitle",
});

const popupAddCards = new PopupWithForm("#cardPopup", handleCardFormSubmit);
popupAddCards.setEventListeners();

function handleCardFormSubmit(data) {
  cardSection.addItem(
    createCard({
      name: data.title,
      link: data.link,
    })
  );
  popupAddCards.close();
}

editProfileButton.addEventListener("click", () => {
  const userInfo = profileInfo.getUserInfo();
  userNameForm.value = userInfo.name;
  userOccupationForm.value = userInfo.info;
  popupProfile.open();
});

createCardButton.addEventListener("click", () => {
  popupAddCards.open();
  addCardValidator.enableValidation();
});

const profileValidator = new FormValidator(validationConfig, profilePopup);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, createCardPopup);
addCardValidator.enableValidation();
