const menuButton = document.querySelector('.page-header__menu-button');
const header = document.querySelector('.page-header');

const initMenu = function () {
  header.classList.remove('page-header--nojs');
  menuButton.addEventListener('click', function () {
    header.classList.toggle('page-header--opened');
  });
};
export {initMenu};
