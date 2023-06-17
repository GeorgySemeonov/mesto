import "./index.css";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import { Section } from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  editProfileButton,
  profilePopup,
  createCardButton,
  createCardPopup,
  userNameForm,
  userOccupationForm,
  validationConfig,
  avatarPopup,
  editAvatarButton
} from "../utils/constants.js";


let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '3198a316-5945-45ef-bc5b-580139a53c17',
    "Content-Type": "application/json"
  }
});

Promise.all([api.getDataProfile(), api.getInitialCards()])
  .then(([profInfo, cardsData]) => {
    console.log(profInfo);
    console.log(cardsData);
    userId = profInfo._id;
    profileInfo.setUserInfo(profInfo);
    cardSection.renderItems(cardsData);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  })


const popupImage = new PopupWithImage(".popup_image-card");
popupImage.setEventListeners();

// const cardsList = document.querySelector(".elements__list");

const createCard = (item) => {

  //const cardItem = new Card(item, "#cardTamplate", handleCardClick);
  //const newCard = cardItem.createCard();
  // cardsList.prepend(newCard);

  //return newCard;

  const cardItem = new Card({
    data: item,
    userId: userId,
    handleCardClick: (name, link) => {
      popupImage.open(name, link);
    },
    handleDelCard: (cardId) => {
      popupWithConfirms.open();
      popupWithConfirms.submitCallback(() => {
        api.deliteCard(cardId)
          .then(() => {
            popupWithConfirms.close();
            cardItem.deleteCard();
          })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
          })
      })
    },
    handleLikeAdd: (cardId) => {
      api.addLike(cardId)
        .then((data) => {
          cardItem.handleLikeCard(data);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
    },
    handleLikeDel: (cardId) => {
      api.delLike(cardId)
        .then((data) => {
          cardItem.handleLikeCard(data)
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        });
    },
  },
    ".element__tamplate");

  const newCard = cardItem.createCard();
  return newCard;

}

// const handleCardClick = (name, link) => {
//   popupImage.open(name, link);
// };

const popupWithConfirms = new PopupWithConfirm('.popup_type_confirm');
popupWithConfirms.setEventListeners();

const cardSection = new Section(
  {
    renderer: (item) => {
      const cardArray = createCard(item);
      cardSection.addItem(cardArray, 'append');
    }
  },
  ".elements__list"
);
console.log(cardSection);

//cardSection.renderItems();

const popupProfile = new PopupWithForm("#profilePopup", handleProfileFormSubmit);
popupProfile.setEventListeners();

function handleProfileFormSubmit(item) {
  popupProfile.loading(true)
  api.setDataProfile(item)
    .then((res) => {
      profileInfo.setUserInfo(res);
      popupProfile.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupProfile.loading(false);
    })
  
}

const profileInfo = new UserInfo({
  profileName: ".profile__title",
  profileDescription : ".profile__subtitle",
  profileAvatar: ".profile__photo"
});

const popupAddCards = new PopupWithForm("#cardPopup", handleCardFormSubmit);
popupAddCards.setEventListeners();

function handleCardFormSubmit(data) {
  popupAddCards.loading(true);
  api.addNewCard(data)
  .then((res) => {
    cardSection.addItem(createCard(res), 'prepend');
    popupAddCards.close();
  })
  .catch((error) => console.log(error))
  .finally(() => {
    popupAddCards.loading(false);
  })
  // cardSection.addItem(
  //   createCard({
  //     name: data.title,
  //     link: data.link,
  //   })
  // );
  // popupAddCards.close();
}

const popupAvatarEdit = new PopupWithForm("#avatarPopup", handleAvatarFormSubmit);
popupAvatarEdit.setEventListeners();

function handleAvatarFormSubmit(data) {
  popupAvatarEdit.loading(true);
  api.setAvatar(data)
  .then((res) => {
    profileInfo.setUserInfo(res);
    popupAvatarEdit.close();
  })
  .catch((error) => console.log(error))
  .finally(() => {
    popupAvatarEdit.loading(false);
  })
}

editAvatarButton.addEventListener('click', function () {
  popupAvatarEdit.open();
  avatarValidator.resetValidation();
 });

editProfileButton.addEventListener("click", () => {
  const userInfo = profileInfo.getUserInfo();
  userNameForm.value = userInfo.name;
  userOccupationForm.value = userInfo.infos;
  popupProfile.open();
});
console.log(userNameForm.value);
createCardButton.addEventListener("click", () => {
  popupAddCards.open();
  addCardValidator.resetValidation();
});

const profileValidator = new FormValidator(validationConfig, profilePopup);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, createCardPopup);
addCardValidator.enableValidation();

const avatarValidator = new FormValidator(validationConfig, avatarPopup);
avatarValidator.enableValidation();
