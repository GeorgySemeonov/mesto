let editProfileButton = document.querySelector(".profile__edit");
let editPopup = document.querySelector(".popup");


editProfileButton.addEventListener("click", function () {
  userNameForm.value = userName.textContent;
  userOccupationForm.value = userOccupation.textContent;

  openPopup(editPopup);
});

function openPopup(popup){
  editPopup.classList.add("popup_opened");
};
function closePopup(popup){
  editPopup.classList.remove("popup_opened");
};



let closeEditButton = document.querySelector(".popup__close-icon ");

closeEditButton.addEventListener("click", function () {
  closePopup(editPopup);
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

  closePopup(editPopup);
}

formElement.addEventListener("submit", handleFormSubmit);
