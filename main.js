(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function r(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}t.p="";var i=function(){function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_showInputError",(function(t,e){e.textContent=t.validationMessage,e.classList.add(o._activeErrorClass),t.classList.add(o._inputErrorClass)})),r(this,"_hideInputError",(function(t,e){e.textContent="",e.classList.remove(o._activeErrorClass),t.classList.remove(o._inputErrorClass)})),r(this,"_enableButton",(function(){o._submitButton.classList.remove(o._inactiveButtonClass),o._submitButton.disabled=!0})),r(this,"_disableButton",(function(){o._submitButton.classList.add(o._inactiveButtonClass),o._submitButton.disabled=!1})),r(this,"_checkInputValidity",(function(t){var e=o._formElement.querySelector("".concat(o._inputErrorClass).concat(t.name));t.validity.valid?o._hideInputError(t,e):o._showInputError(t,e)})),r(this,"_hasInvalidInput",(function(){return o._inputList.some((function(t){return!t.validity.valid}))})),r(this,"_toggleButtonState",(function(){o._hasInvalidInput()?o._enableButton():o._disableButton()})),r(this,"_setEventListeners",(function(){o._inputList.forEach((function(t){t.addEventListener("input",(function(){o._checkInputValidity(t),o._toggleButtonState()}))}))})),this._validationConfig=e,this._formElement=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputErrorClass=e.errorClassTemplate,this._activeErrorClass=e.errorClass,this._inactiveButtonClass=e.inactiveButtonClass}var e,o;return e=t,(o=[{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){var n=t._formElement.querySelector("".concat(t._inputErrorClass).concat(e.name));t._hideInputError(e,n)}))}},{key:"enableValidation",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._formElement.addEventListener("reset",(function(){t._enableButton()})),this._setEventListeners()}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.data,o=e.userId,i=e.handleCardClick,u=e.handleLikeAdd,a=e.handleLikeDel,c=e.handleDelCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._name=r.name,this._link=r.link,this._userId=o,this._cardId=r._id,this._cardOwnerId=r.owner._id,this._likes=r.likes,this._templateSelector=n,this._handleCardClick=i,this._handleLikeAdd=u,this._handleLikeDel=a,this._handleDelCard=c}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._card=this._getTemplate(),this._counterLikes=this._card.querySelector(".element__like-count"),this._card.querySelector(".element__title").textContent=this._name,this._card.querySelector(".element__image").src=this._link,this._card.alt="".concat(this._name),this._likeButton=this._card.querySelector(".element__like-button"),this._handleDeleteLike(),this._handleLikeState(),this._setEventListeners(),this._card}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton=this._card.querySelector(".element__delite-button"),this._deleteButton.addEventListener("click",(function(){t._handleDelCard(t._cardId)})),this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("element__like-icon_active")?t._handleLikeDel(t._cardId):t._handleLikeAdd(t._cardId)})),this._cardPopupImage=this._card.querySelector(".element__image"),this._cardPopupImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"handleLikeCard",value:function(t){this._likes=t.likes,this._counterLikes.textContent=this._likes.length,this._likeButton.classList.toggle("element__like-icon_active")}},{key:"_handleLikeState",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId&&t._likeButton.classList.add("element__like-icon_active"),t._counterLikes.textContent=t._likes.length}))}},{key:"_handleDeleteLike",value:function(){this._userId!==this._cardOwnerId&&this._deleteButton.remove()}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_overlayClose",value:function(t){t.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("mousedown",this.close.bind(this)),this._popup.addEventListener("mousedown",this._overlayClose.bind(this))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(r);if(o){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupTitle=e._popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t,e){d(v(u.prototype),"open",this).call(this),this._popupImage.src=e,this._popupImage.alt="Фотография ".concat(t),this._popupTitle.textContent=t}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitHandler=e,n._form=n._popup.querySelector(".popup__forms"),n._inputList=n._popup.querySelectorAll(".popup__form"),n._submitButton=n._form.querySelector(".popup__button"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;S(k(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._submitHandler(t._getInputValues())}))}},{key:"close",value:function(){S(k(u.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(t){t?(this._submitButton.textContent="Сохранение...",this._submitButton.classList.add("popup__button_loading")):(this._submitButton.textContent=this._submitButtonText,this._submitButton.classList.remove("popup__button_loading"))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._submitButton=document.querySelector("#confirmButton"),e}return e=u,(n=[{key:"submitCallback",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;O(j(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var T=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._containerSelector=document.querySelector(n)}var e,n;return e=t,n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){"append"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend")?this._containerSelector.append(t):this._containerSelector.prepend(t)}}],n&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var R=function(){function t(e){var n=e.profileName,r=e.profileDescription,o=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileInfo=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._profileName.textContent,info:this._profileInfo.textContent},this._userInfo}},{key:"setUserInfo",value:function(t){this._profileAvatar.src=t.avatar,this._profileName.textContent=t.name,this._profileInfo.textContent=t.occupation}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkError",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkError(t)}))}},{key:"deliteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"getDataProfile",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"setDataProfile",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkError(t)}))}},{key:"setAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkError(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"delLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkError(t)}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.p,t.p,t.p,t.p,t.p,t.p;var N,U=document.querySelector(".profile__edit"),H=document.querySelector("#profilePopup"),J=document.querySelector(".profile__add-button"),F=document.querySelector("#cardPopup"),G=document.querySelector("#userNameForm"),M=document.querySelector("#userOccupationForm"),z=document.querySelector(".profile__avatar-edit"),$=document.forms["user-avatar"],K={formSelector:".popup__forms",inputSelector:".popup__form",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_active",errorClassTemplate:".popup__input-error_type_",errorClass:"popup__input-error",inputTypeErrorBorder:"popup__input_border_error"};function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new V({url:"https://mesto.nomoreparties.co/v1/cohort-68",headers:{authorization:"3198a316-5945-45ef-bc5b-580139a53c17","Content-Type":"application/json"}});Promise.all([W.getDataProfile(),W.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];N=o._id,nt.setUserInfo(o),tt.renderItems(i)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var X=new m(".popup_image-card");function Y(t){var e=new c({data:t,userId:N,handleCardClick:function(t,e){X.open(t,e)},handleDelCard:function(t){Z.open(),Z.submitCallback((function(){W.delCard(t).then((function(){Z.close(),e.deleteCard()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}))},handleLikeAdd:function(t){W.addLike(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))},handleLikeDel:function(t){W.delLike(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}},"#cardTamplate");return e.generateCard()}X.setEventListeners();var Z=new L("#confirmPopup");Z.setEventListeners();var tt=new T({renderer:function(t){var e=Y(t);tt.addItem(e,"append")}},".elements__list"),et=new w("#profilePopup",(function(t){et.loading(!0),W.setDataProfile(t).then((function(t){nt.setUserInfo(t),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.loading(!1)}))}));et.setEventListeners();var nt=new R({profileName:".profile__title",profileDescription:".profile__subtitle",profileAvatar:".profile__photo"}),rt=new w("#cardPopup",(function(t){rt.loading(!0),W.addNewCard(t).then((function(t){tt.addItem(Y(t),"prepend"),rt.close()})).catch((function(t){return console.log(t)})).finally((function(){rt.loading(!1)}))}));rt.setEventListeners();var ot=new w("#avatarPopup",(function(t){ot.loading(!0),W.setAvatar(t).then((function(t){nt.setUserInfo(t),ot.close()})).catch((function(t){return console.log(t)})).finally((function(){ot.loading(!1)}))}));ot.setEventListeners(),z.addEventListener("click",(function(){ot.open(),profileAvatarEditValidate.resetValidate()})),U.addEventListener("click",(function(){var t=nt.getUserInfo();G.value=t.name,M.value=t.info,et.open()})),J.addEventListener("click",(function(){rt.open(),it.resetValidation()})),new i(K,H).enableValidation();var it=new i(K,F);it.enableValidation(),new i(K,$).enableValidation()})();