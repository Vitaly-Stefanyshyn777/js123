// "use strict";

// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav');
// const menu = document.querySelector('.menu');
// const close = document.querySelector('.close');
// const overlay = document.querySelector('.overlay');

// // burger.addEventListener('click', function() {
// //     nav.classList.toggle('show');
// //     menu.classList.toggle('show');
// // });

// burger.addEventListener('click', function() {
//     nav.classList.add('add');
//     overlay.classList.toggle('hiden');
// });

// close.addEventListener('click', function() {
//     nav.classList.remove('add');
//     overlay.classList.toggle('hiden');
// });






// "use strict";

// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav');
// const menu = document.querySelector('.menu');
// const close = document.querySelector('.close');
// const overlay = document.querySelector('.overlay');

// burger.addEventListener('click', function() {
//     nav.classList.add('add'); // Замінив 'add' на 'show', щоб клас відповідав семантиці.
//     overlay.classList.toggle('hidden'); // Виправив 'hiden' на 'hidden'.
// });

// close.addEventListener('click', function() {
//     nav.classList.remove('show'); // Замінив 'add' на 'show', щоб клас відповідав семантиці.
//     overlay.classList.toggle('hidden'); // Виправив 'hiden' на 'hidden'.
// });





const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", function () {
  nav.classList.add("add");
  overlay.classList.remove("hidden");
});

close.addEventListener("click", function () {
  nav.classList.remove("add");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  nav.classList.remove("add");
  overlay.classList.add("hidden");
});
