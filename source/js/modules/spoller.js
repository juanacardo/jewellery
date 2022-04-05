const spollerLabels = document.querySelectorAll('.spoller__button-label');
const spollers = document.querySelectorAll('.spoller__item');

const initSpoller = function () {
  spollers.forEach(function (spoller) {
    spoller.classList.remove('spoller__item--nojs');
  });

  spollerLabels.forEach(function (button) {
    button.addEventListener('click', function () {
      let spoller = button.closest('.spoller__item');

      if (spoller.classList.contains('spoller__item--opened')) {
        spoller.classList.remove('spoller__item--opened');
      } else {
        spollers.forEach(function (item) {
          item.classList.remove('spoller__item--opened');
        });
        spoller.classList.add('spoller__item--opened');
      }
    });
  });
};
export {initSpoller};
