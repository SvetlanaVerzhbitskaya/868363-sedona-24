var link = document.querySelector(".button-search-hotels");

var popup = document.querySelector(".modal-search");

var date = popup.querySelector("[name=arrival-date]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  date.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
})
