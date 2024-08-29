"use strict";

const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = [...slider.querySelectorAll("img")];

const slideCount = slides.length;

let slideIndex = 0; // Индекс текущего слайда

// Функция для обновления слайдера
const updateSlider = () => {
  // Перебираем все слайды и отображаем только текущий
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
};

// Функция для показа следующего слайда
const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSliderDots(); //обновляем слайдер с точками
};

// Функция для показа предыдущего слайда
const showPreviousSlide = () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSliderDots(); //обновляем слайдер с точками
};

updateSlider();

// Добавляем обработчики событий для кнопок
nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPreviousSlide);

// Обработка событий нажатия клавиш для слайдера
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    showPreviousSlide();
  } else if (event.key === "ArrowRight") {
    showNextSlide();
  }
});

// Создаем точки для слайдера
const sliderDots = document.querySelector(".slider-dots");
slides.forEach(() => {
  const dot = document.createElement("span");
  dot.classList.add("slider-dot");
  sliderDots.append(dot);
});

const dots = [...sliderDots.querySelectorAll(".slider-dot")];

// Функция для обновления слайдера с учетом точек

const updateSliderDots = () => {
  updateSlider(); // обновляем слайдер

  // Подсветка текущей точки

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });
};

// Добавляем обработчики событий для точек слайдера
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    updateSliderDots();
  });
});


// let currentSlide = 0;

// function showSlide(slideIndex) {
//     slides.forEach((slide, index) => {
//         slide.style.display = index === slideIndex ? 'block' : 'none';
//     });
// }

// showSlide(currentSlide);

// prevButton.addEventListener('click', () => {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// });

// nextButton.addEventListener('click', () => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// });
// setInterval(() => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }, 3000);


// // -----------------------Для слайдера с использованием GSAP---------------------------


// import { gsap } from 'gsap';


// const slidesContainer = document.querySelector('.slider');


// const slides2 = Array.from(slidesContainer.querySelectorAll('.slide'));


// let currentSlideIndex = 0;


// function animateSlide(fromIndex, toIndex) {


//     const fromSlide = slides[fromIndex];


//     const toSlide = slides[toIndex];


//     gsap.to(fromSlide, 0.5, { x: '100%', ease: 'power2.out' });


//     gsap.from(toSlide, 0.5, { x: '-100%', ease: 'power2.in' });

// }