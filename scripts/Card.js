export  class Card {
  constructor(data , templateSelector,cardPopupImage) {
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
  
    this._setEventListeners();

    return this._card;
  }
  
  _setEventListeners() {
    this._deleteButton = this._card.querySelector(".element__delite-button") ;
   this._deleteButton.addEventListener('click', () => {
    console.log(this._deleteCard());
     this._deleteCard();
   });

   this._likeButton = this._card.querySelector(".element__like-button") ;
   this._likeButton.addEventListener('click', () => {
     console.log(this._likeCard);
     this._likeCard();
     
   });

   this._cardPopupImage = this._card.querySelector(".element__image") ;
   this._cardPopupImage.addEventListener('click', () => {
    
     this._imageSubmit();
   });
 }
  
  _deleteCard (){
    this._card.remove();
  }

  _likeCard(){
    this._likeButton.classList.toggle(".element__like-icon_active")
    
  }

  _imageSubmit(){
    imageSubmits ;
    
  }
  
}


function imageSubmits(event) {
  image.src = event.target.src;
  image.setAttribute("alt", popupTitle.textContent);
  popupTitle.textContent = event.target
    .closest(".element")
    .querySelector(".element__title").textContent;
  openPopup(openImagePopup);
}