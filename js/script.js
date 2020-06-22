var linkWrite = document.querySelector(".write");
var popupWrite = document.querySelector(".write-us");
var closeWrite = popupWrite.querySelector(".popup-close");
var nameWrite = popupWrite.querySelector(".name");

linkWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("popup-show");
  nameWrite.focus();
});

closeWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupWrite.classList.contains("popup-show")) {
      evt.preventDefault();
      popupWrite.classList.remove("popup-show");
    }
  }
});

var smallMap = document.querySelector(".map-small");
var bigMap = document.querySelector(".big-map");
var closeMap = bigMap.querySelector(".popup-close");

smallMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("popup-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (bigMap.classList.contains("popup-show")) {
      evt.preventDefault();
      bigMap.classList.remove("popup-show");
    }
  }
});
