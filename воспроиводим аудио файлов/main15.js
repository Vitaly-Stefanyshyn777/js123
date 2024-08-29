"use strict";

const userInput = document.querySelector('.input');
const btn = document.querySelector('.send');

const audioTrue = new Audio("./gospel-choir-heavenly-transition-3-186880.mp3")
const audiofolse = new Audio("./wrong-place-129242.mp3")
btn.addEventListener("click", () => {
    if (userInput.value === "добро") {
        audioTrue.play();
    } else {
        audiofolse.play();
    }
})