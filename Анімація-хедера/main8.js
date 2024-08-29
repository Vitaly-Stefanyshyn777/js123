"use strict";

const header = document.querySelector("header");
const links = document.querySelectorAll(".link");
const logo = document.querySelector(".logo");

function linksAnimatrion(e) {
  if (e.target.classList.contains("link")) {
    const targetLink = e.target;

    links.forEach((el) => {
      el.style.opacity = this;
    });
    logo.style.opacity = this;
    header.classList.toggle("head");
    targetLink.style.opacity = 1;
  }
}

header.addEventListener("mouseover", linksAnimatrion.bind(0.4));

header.addEventListener("mouseout", linksAnimatrion.bind(1));
