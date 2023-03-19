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

const cardsList = document.querySelector(".elements__list");
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
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameForm.value;
  userOccupation.textContent = userOccupationForm.value;

  closePopup(profilePopup);
}

formElement.addEventListener("submit", handleFormSubmit);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const createCard = (card) => {
  const cardTamplate = document
    .querySelector("#cardTamplate")
    .content.cloneNode(true);
  const cardHeading = cardTamplate.querySelector(".element__title");
  cardHeading.textContent = card.name;
  const cardImage = cardTamplate.querySelector(".element__image");
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  const deliteButton = cardTamplate.querySelector(".element__delite-button");
  deliteButton.addEventListener("click", deliteCard);
  const likeButton = cardTamplate.querySelector(".element__like-button");
  likeButton.addEventListener("click", likeCard);
  cardImage.addEventListener("click", imageSubmit);

  return cardTamplate;
};

const renderCard = (card, cardsList) => {
  const cardElement = createCard(card);
  cardsList.prepend(cardElement);
};

initialCards.forEach((card) => {
  renderCard(card, cardsList);
});

function deliteCard(event) {
  const button = event.target;
  const card = button.closest(".element");
  card.remove();
}

popupFormsCard.addEventListener("submit", cardFormSubmit);

function cardFormSubmit(event) {
  event.preventDefault();
  const popupFormsCard = event.target;
  const card = {
    name: nameCard.value,
    link: imageLink.value,
  };
  renderCard(card, cardsList);
  closePopup(cardPopup);
}

initialCards.push(cardFormSubmit);

function likeCard(event) {
  event.target.classList.toggle("element__like-icon_active");
}

function imageSubmit(event) {
  image.src = event.target.src;
  image.setAttribute("alt", popupTitle.textContent);
  popupTitle.textContent = event.target
    .closest(".element")
    .querySelector(".element__title").textContent;
  openPopup(openImagePopup);
}
