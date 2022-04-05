import {page, popupOverlay, onOverlayClick, onEscPress} from './popup.js';

const filter = document.querySelector('.filter');
const filterOpenButton = document.querySelector('.filter__show-button');
const filterCloseButton = document.querySelector('.filter__close');

// Закрытие фильтра окна по клику
const onCloseFilterButtonClick = () => {
  filter.classList.add('filter--closed');
  page.classList.remove('blocked');
  popupOverlay.classList.add('popup-overlay--closed');
};

// Открытие модального окна по клику, добавление основных обработчиков
const onOpenFilterButtonClick = () => {
  filter.classList.remove('filter--closed');
  page.classList.add('blocked');
  popupOverlay.classList.remove('popup-overlay--closed');
  filterCloseButton.addEventListener('click', onCloseFilterButtonClick, {once: true});
  window.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscPress, {once: true});
};

// Добавление обработчика событий на элемент .filter__show-button
if (filter) {
  filterOpenButton.addEventListener('click', onOpenFilterButtonClick);
}
