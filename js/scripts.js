var link = document.querySelector(".button-search-hotels");

var popup = document.querySelector(".modal-search");

var form = popup.querySelector(".appointment-form");

var arrivaldate = popup.querySelector("[name=arrival-date]");

var leavingdate = popup.querySelector("[name=leaving-date]");

var adults = popup.querySelector("[name=adults]");

var children = popup.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.add("modal-hidden");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.toggle("modal-show");
  arrivaldate.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrivaldate.value || !leavingdate.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
