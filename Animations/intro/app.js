"use strict";

const button = document.querySelector("button");
const nav = document.querySelector("nav");
// const body = document.querySelector("body");
button.addEventListener("click", () => {
  nav.classList.toggle("nav-slide");
});
button.addEventListener("mouseover", () => {
  button.classList.add("btn-scaleup");
});
button.addEventListener("mouseout", () => {
  button.classList.remove("btn-scaleup");
});
