
"use strict";

// Вибір елементів DOM
const btnModalOpen = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelectorAll(".modal__close");
const overlay = document.querySelector(".overlay");
const img = document.querySelector(".img");

function dalTab() {
    const focus = document.querySelectorAll(
        "button,[href], input, select, textarea, [tabindex] : not([tabindex= '-1'])"
   
    
    )
    focuc.forEach(element => {
        if (!modal.contains(element)) {
            element.setAttribute("tabindex", '-1');
        }
    })
}



// Функція для відкриття модального вікна
const modalOpen = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    dalTab();
};

// Функція для закриття модального вікна
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Слухач подій для відкриття модального вікна
btnModalOpen.addEventListener("click", modalOpen);

// Слухачі подій для закриття модального вікна через кнопки закриття
modalClose.forEach((val) => {
    val.addEventListener("click", closeModal);
});

// Слухач подій для закриття модального вікна при кліку на оверлей
overlay.addEventListener("click", closeModal);

// Слухач подій для закриття модального вікна за допомогоюавіші Escape
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Функція для генерації та відображення випадкового зображення
function randomNumber() {
    // Генерація випадкового числа між 600 та 700
    const num = Math.trunc(Math.random() * (700 - 600 + 1)) + 600;
    console.log(num);
    // Встановлення джерела зображення з випадковим числом
    img.setAttribute("src", `https://picsum.photos/700/${num}`);
}

// Слухач подій для генерації випадкового зображення
document
    .querySelector(".modal__btn-random")
    .addEventListener("click", randomNumber);
