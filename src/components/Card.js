export class Card {
  constructor({data, userId, handleCardClick, handleLikeAdd, handleLikeDel, handleDelCard }, templateSelector) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._likes = data.likes;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._handleLikeAdd = handleLikeAdd;
    this._handleLikeDel = handleLikeDel;
    this._handleDelCard = handleDelCard;
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

    this._counterLikes = this._card.querySelector(".element__like-count");

    this._card.querySelector(".element__title").textContent = this._name;
    this._card.querySelector(".element__image").src = this._link;
    this._card.alt = `${this._name}`;

    this._likeButton = this._card.querySelector(".element__like-button");


    this._handleDeleteLike(); 
    this._handleLikeState();
    this._setEventListeners();

    return this._card;
  }


  _setEventListeners() {
    this._deleteButton = this._card.querySelector(".element__delite-button");
    this._deleteButton.addEventListener("click", () => {
      this._handleDelCard(this._cardId);
    });

    this._likeButton.addEventListener("click", () => {

      if (this._likeButton.classList.contains("element__like-icon_active")) {
        this._handleLikeDel(this._cardId);
    } else {
        this._handleLikeAdd(this._cardId);
    }
    });

    this._cardPopupImage = this._card.querySelector(".element__image");
    this._cardPopupImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  handleLikeCard(data) {
    this._likes = data.likes;
    this._counterLikes.textContent = this._likes.length; // счётчик лайков (берётся длина массива лайков и добавляется в разметку)
    this._likeButton.classList.toggle("element__like-icon_active");
}

_handleLikeState() {
  this._likes.forEach((user) => {
      if (user._id === this._userId) {
        this._likeButton.classList.add("element__like-icon_active");
      }
      this._counterLikes.textContent = this._likes.length;
  })
}

_handleDeleteLike() {
  if (this._userId !== this._cardOwnerId) {
    this._deleteButton.remove();
  }
}

  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  // _likeCard() {
    
  // }

  // _imageSubmit() {
  //   showImage(this._name, this._link);
  // }
}
