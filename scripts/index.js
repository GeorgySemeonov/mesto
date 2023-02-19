let editProfileButton = document.querySelector(".profile__edit");
let editPopup = document.querySelector(".popup");
if (!editProfileButton) {
  throw new Error("NO EDIT BUTTON");
}

editProfileButton.addEventListener("click", function () {
  //console.log(editPopup);

  editPopup.classList.add("popup_opened");
});

let closeEditButton = document.querySelector(".popup__close-icon ");

closeEditButton.addEventListener("click", function () {
  editPopup.classList.remove("popup_opened");
});

let userName = document.querySelector(".profile__title");
let userOccupation = document.querySelector(".profile__subtitle");

let userNameForm = document.querySelector("#userNameForm");
userNameForm.value = userName.textContent;

let userOccupationForm = document.querySelector("#userOccupationForm");
userOccupationForm.value = userOccupation.textContent;

let formElement = document.querySelector("#popupForms");
let submitButton = document.querySelector(".popup__button");

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameForm.value;
  userOccupation.textContent = userOccupationForm.value;

  submitButton.addEventListener("click", function () {
    editPopup.classList.remove("popup_opened");
  });
}

formElement.addEventListener("submit", handleFormSubmit);
