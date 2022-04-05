const page = document.querySelector('.page');
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.page-header__login');
const popupCloseButton = popup.querySelector('.popup__button');
const popupOverlay = document.querySelector('.popup-overlay');
const popupForm = document.querySelector('.popup-form');
const popupEmailInput = document.getElementById('popup-email');

// Закрытие модального окна по клику
const onCloseButtonClick = () => {
  popup.classList.add('popup--closed');
  page.classList.remove('blocked');
  popupOverlay.classList.add('popup-overlay--closed');
};

// Закрытие информ. окна по клику вне его области
const onOverlayClick = (evt) => {
  if (evt.target.closest('.popup-overlay')) {
    onCloseButtonClick();
    window.removeEventListener('click', onOverlayClick);
  }
};

// Проверка нажатия клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

// Закрытие модального окна клавишей Esc
const onEscPress = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseButtonClick();
  }
};

// Замена адреса модального окна при загрузке JS
const changeUrl = () => {
  popupOpenButton.href = '#';
};

// Добавление автофокуса на поле e-mail
const setFocus = () => {
  popupEmailInput.focus();
};

// Автозаполнение поля e-mail на основании последней записи Local Storage
const addEmailValue = () => {
  popupEmailInput.value = (localStorage.getItem('e-mail'));
};

// Сохранение данных поля e-mail в Local Storage
const saveToLocalStorage = (input) => {
  localStorage.setItem(input.name, input.value);
};

// Поведение формы при ее отправке
const onFormSubmit = (evt) => {
  evt.preventDefault();
  saveToLocalStorage(popupEmailInput);
  onCloseButtonClick();
};

// Открытие модального окна по клику, добавление основных обработчиков
const onOpenButtonClick = () => {
  changeUrl();
  popup.classList.remove('popup--closed');
  page.classList.add('blocked');
  popupOverlay.classList.remove('popup-overlay--closed');
  setFocus();
  addEmailValue();
  popupCloseButton.addEventListener('click', onCloseButtonClick, {once: true});
  window.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscPress, {once: true});
  popupForm.addEventListener('submit', onFormSubmit, {once: true});
};

// Добавление обработчика событий на элемент .page-header__login
popupOpenButton.addEventListener('click', onOpenButtonClick);

export {page, popupOverlay, onOverlayClick, onEscPress};
