const page = document.querySelector('.page');
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.page-header__login');
const popupCloseButton = document.querySelector('.popup__button');
const popupOverlay = document.querySelector('.popup-overlay');
const filter = document.querySelector('.filter');
const filterOpenButton = document.querySelector('.filter__show-button');
const filterCloseButton = document.querySelector('.filter__close');
const popupForm = document.querySelector('.popup-form');

let showModal = function (modal, buttonOpen, modalClass) {
  buttonOpen.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove(modalClass);
    popupOverlay.classList.remove('popup-overlay--closed');
    page.classList.add('blocked');
  });
};

let hideModal = function (modal, buttonClose, modalClass) {
  buttonClose.addEventListener('click', function () {
    modal.classList.add(modalClass);
    popupOverlay.classList.add('popup-overlay--closed');
    page.classList.remove('blocked');
  });
};

let showPopup = function () {
  popupForm.reset();
  showModal(popup, popupOpenButton, 'popup--closed');
};
let hidePopup = hideModal(popup, popupCloseButton, 'popup--closed');
let showFilter = showModal(filter, filterOpenButton, 'filter--closed');
let hideFilter = hideModal(filter, filterCloseButton, 'filter--closed');


export {showPopup, hidePopup, showFilter, hideFilter};
// // Замыкание фокуса внутри попапа
// const catchFocus = function () {
//   const focusableElementsString =
//     'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable]';
//   const focusableElements = popup.querySelectorAll(focusableElementsString);
//   focusableElements = Array.prototype.slice.call(focusableElements);
//   const firstTabStop = focusableElements[0];
//   const lastTabStop = focusableElements[focusableElements.length - 1];
//   firstTabStop.focus();
//   popup.addEventListener('keydown', function (e) {
//     if (e.keyCode === 9) {
//       if (e.shiftKey) {
//         if (document.activeElement === firstTabStop) {
//           e.preventDefault();
//           lastTabStop.focus();
//         }
//       } else {
//         if (document.activeElement === lastTabStop) {
//           e.preventDefault();
//           firstTabStop.focus();
//         }
//       }
//     }
//   });
// };

// // Сохранение в Local Storage
// const saveInLocalStorage = function (input) {
//   localStorage.setItem(input.name, input.value);
// };

// const onPopupFormEscKeydown = function (e) {
//   if (e.keyCode === 27) {
//     hideModal();
//   }
// };

// const openPopup = function () {
//   showPopup();
//   catchFocus();
//   popupCloseButton.addEventListener('click', hidePopup);
//   page.addEventListener('keydown', onPopupFormEscKeydown);
//   popupOverlay.addEventListener('click', hidePopup);
// };

// const openFilter = function () {
//   showFilter();
//   catchFocus();
//   filterCloseButton.addEventListener('click', hideFilter);
//   page.addEventListener('keydown', onPopupFormEscKeydown);
//   popupOverlay.addEventListener('click', hideFilter);
// };

// popupOpenButton.addEventListener('click', openPopup);
// filterOpenButton.addEventListener('click', openPopup);


// const closeModal = function () {
//   popupCloseButton.removeEventListener('click', hideModal);
//   page.removeEventListener('keydown', onPopupFormEscKeydown);
//   popupOverlay.removeEventListener('click', hideModal);
//   inputEmail.removeEventListener('input', validatePopupEmail);
//   inputPassword.removeEventListener('input', validatePopupPassword);
//   saveInLocalStorage(inputEmail);
// };


// popupForm.addEventListener('submit', function (evt) {
//   closeModal();
// });
