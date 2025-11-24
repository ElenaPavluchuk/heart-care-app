// function openPopup() {
//   const popup = document.getElementById("heart-popup");
//   popup.classList.add("show");
//   document.body.style.overflow = "hidden";
// }

// function closePopup() {
//   const popup = document.getElementById("heart-popup");
//   popup.classList.remove("show");
//   document.body.style.overflow = "";
// }

// document.getElementById("heart-popup").addEventListener("click", function (e) {
//   if (e.target === this) {
//     closePopup();
//   }
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     closePopup();
//   }
// });

// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("heart-popup");

  if (!popup) return; // если попапа нет на странице — ничего не делаем

  // Открытие по любой кнопке с data-open-popup
  document.querySelectorAll("[data-open-popup]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // важно для <button> внутри <form>
      popup.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  // Закрытие
  function closePopup() {
    popup.classList.remove("show");
    document.body.style.overflow = "";
  }

  // Крестик
  popup.querySelectorAll(".popup-close-x, .close-btn").forEach((el) => {
    el.addEventListener("click", closePopup);
  });

  // Клик по оверлею
  popup.addEventListener("click", function (e) {
    if (e.target === popup) closePopup();
  });

  // Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup.classList.contains("show")) {
      closePopup();
    }
  });
});
