// JavaScript Document
var hamburger = document.querySelector(".hamburger-icon");
var nav = document.querySelector("nav ul");

hamburger.addEventListener("click", mobileMenu)

function mobileMenu() {
  nav.classList.toggle("nav-active");
}

mobileMenu()
