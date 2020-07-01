// Форма обратной связи на Главной
let linkWrite = document.querySelector('.write');
let popupWrite = document.querySelector('.write-us');
let closeWrite = document.querySelector('.write-us .popup-close');
let nameWrite = document.querySelector('.write-us .name');

linkWrite.onclick = function (evt) {
  evt.preventDefault();
  popupWrite.classList.add('popup-show');
  nameWrite.focus();
};

closeWrite.onclick = function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove('popup-show');
};

window.onclick = function (evt) {
  if (evt.keyCode === 27) {
    if (popupWrite.classList.contains('popup-show')) {
      evt.preventDefault();
      popupWrite.classList.remove('popup-show');
    }
  }
};

// Карта на Главной
let smallMap = document.querySelector('.map-small');
let bigMap = document.querySelector('.big-map');
let closeMap = document.querySelector('.big-map .popup-close');

smallMap.onclick = function (evt) {
  evt.preventDefault();
  bigMap.classList.add('popup-show');
};

closeMap.onclick = function (evt) {
  evt.preventDefault();
  bigMap.classList.remove('popup-show');
};

window.onclick = function (evt) {
  if (evt.keyCode === 27) {
    if (bigMap.classList.contains('popup-show')) {
      evt.preventDefault();
      bigMap.classList.remove('popup-show');
    }
  }
};

// Форма заказа в Каталоге
let linkBuy = document.querySelector('.buy-button');
let windowBuy = document.querySelector('.cart-add');
let closeBuy = document.querySelector('.cart-add .popup-close');

linkBuy.onclick = function (evt) {
  evt.preventDefault();
  windowBuy.classList.add('popup-show');
};

closeBuy.addEventListener('click', function (evt) {
  evt.preventDefault();
  windowBuy.classList.remove('popup-show');
});

window.onclick = function (evt) {
  if (evt.keyCode === 27) {
    if (windowBuy.classList.contains('popup-show')) {
      evt.preventDefault();
      windowBuy.classList.remove('popup-show');
    }
  }
};

// Слайдер на Главной
let sliderArrow = document.querySelectorAll('.arrow-button');
let slide = document.querySelector('.slide');

sliderArrow.onclick = function () {
  slide.classList.toggle('slide-current');
  slide.classList.toggle('');
};
