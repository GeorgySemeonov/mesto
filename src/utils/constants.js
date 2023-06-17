export const editProfileButton = document.querySelector(".profile__edit");
export const profilePopup = document.querySelector("#profilePopup");
export const createCardButton = document.querySelector(".profile__add-button");
export const createCardPopup = document.querySelector("#cardPopup");
export const userNameForm = document.querySelector("#userNameForm");
export const userOccupationForm = document.querySelector("#userOccupationForm");
export const editAvatarButton = document.querySelector(".profile__avatar-edit");
export const avatarPopup = document.forms["user-avatar"];

export const validationConfig = {
  formSelector: ".popup__forms",
  inputSelector: ".popup__form",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_active",

  errorClassTemplate: ".popup__input-error_type_",
  errorClass: "popup__input-error",

  inputTypeErrorBorder: "popup__input_border_error",
};
