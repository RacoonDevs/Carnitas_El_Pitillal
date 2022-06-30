const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarItem = document.getElementsByClassName("navbar-item")[0];
const navbar = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
navbarItem.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
navbar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  // navbarLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
