const popup = document.querySelector(".popup");

const editProfileButton = document.querySelector(".profile__edit");
const profilePopup = document.querySelector("#profilePopup");
const createCardButton = document.querySelector(".profile__add-button");
const createCardPopup = document.querySelector("#cardPopup");
const openImagePopup = document.querySelector("#imagePopup");

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

const closeButtons = document.querySelectorAll(".popup__close");

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

let userName = document.querySelector(".profile__title");
let userOccupation = document.querySelector(".profile__subtitle");

let userNameForm = document.querySelector("#userNameForm");

let userOccupationForm = document.querySelector("#userOccupationForm");

let formElement = document.querySelector("#popupForms");

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

const cardsList = document.querySelector(".elements__list");

const createCard = (card) => {
  const cardTamplate = document
    .querySelector("#cardTamplate")
    .content.cloneNode(true);
  const cardHeading = cardTamplate.querySelector(".element__title");
  cardHeading.textContent = card.name;
  const cardImage = cardTamplate.querySelector(".element__image");
  cardImage.setAttribute("src", card.link);
  const deliteButton = cardTamplate.querySelector(".element__delite-button");
  deliteButton.addEventListener("click", deliteCard);
  const likeButton = cardTamplate.querySelector(".element__like-button");
  likeButton.addEventListener("click", likeCard);
  cardImage.addEventListener("click", imageSubmit);

  cardsList.prepend(cardTamplate);
};

initialCards.forEach(createCard);

function deliteCard(event) {
  const button = event.target;
  const card = button.closest(".element");
  card.remove();
}

const popupFormsCard = document.querySelector("#popupFormsCard");
popupFormsCard.addEventListener("submit", cardFormSubmit);

function cardFormSubmit(event) {
  event.preventDefault();
  const popupFormsCard = event.target;
  const nameCard = document.querySelector("#nameCard").value;
  const imageLink = document.querySelector("#imageLink").value;
  const card = {
    name: nameCard,
    link: imageLink,
  };
  createCard(card);
  closePopup(cardPopup);
}

initialCards.push(cardFormSubmit);

function likeCard(event) {
  event.target.classList.toggle("element__like-icon_active");
}

function imageSubmit(event) {
  const image = document.querySelector(".popup__image");
  image.src = event.target.src;
  const popupTitle = document.querySelector(".popup__image-title");
  popupTitle.textContent = event.target
    .closest(".element")
    .querySelector(".element__title").textContent;
  openPopup(openImagePopup);
}
