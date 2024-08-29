"use strict";

const humberger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav__content");
const burgerOverlay = document.querySelector(".burger-overlay");

function toggleHamburger() {
  humberger.classList.remove("active");
  navContent.classList.remove("active");
  burgerOverlay.classList.add("hidden");
}

humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  navContent.classList.toggle("active");
  burgerOverlay.classList.toggle("hidden");
});

navContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__l")) {
    toggleHamburger();
  }
});

burgerOverlay.addEventListener("click", () => {
  toggleHamburger();
});

// плавный скрол
// // пример 1
// const navLinksHeader = document.querySelectorAll(".nav__link")

//     for (let link of navLinksHeader) {
//         link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     document.querySelector(href).scrollIntoView({ behavior: "smooth" });
//   });

// }


// пример 2
// navLinksHeader.forEach((el) => {
//     el.addEventListener("click", function (e) {
//         e.preventDefault();
//         const href = this.getAttribute("href");
//         document.querySelector(href).scrollIntoView({ behavior: "smooth" });
//     });
//     });


// способ 3 правильный делегирование событий
/**
 * Цей код реалізує функціональність плавного прокручування для навігаційних посилань.
 * Він прослуховує кліки на елементах навігації та плавно прокручує до
 * відповідного розділу сторінки, коли натискається посилання.
 */

// Додаємо слухач подій кліку до контейнера навігаційного меню
document.querySelector(".nav__ul").addEventListener("click", function (e) {
  // Запобігаємо стандартній поведінці посилання
  e.preventDefault();

  // Перевіряємо, чи має клікнутий елемент клас "nav__link"
  if (e.target.classList.contains("nav__link")) {
    // Отримуємо цільовий елемент, використовуючи атрибут href клікнутого посилання
    const targetElement = document.querySelector(e.target.getAttribute("href"));

    // Плавно прокручуємо до цільового елемента
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  }
});


// якорь
document.getElementById("top").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
});




















































// for (let link of navLinksHeader) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     document.querySelector(href).scrollIntoView({ behavior: "smooth" });
//   });
// }

//  способ 2

// navLinksHeader.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     document.querySelector(href).scrollIntoView({ behavior: "smooth" });
//   });
// });

// способ 3 правильный делегирование событий
// document.querySelector(".nav__ul").addEventListener("click", function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains("nav__link")) {
//     document.querySelector(e.target.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   }
// });

// якорь
// document.getElementById("top").addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
// });
