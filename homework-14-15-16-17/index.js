const burgerMenu = document.querySelector(".e-burger-menu");
const navMenu = document.querySelector(".c-navigation__wrapper");
const navLink = document.querySelectorAll(".c-navigation__item");

function mobileMenu() {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}

burgerMenu.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));