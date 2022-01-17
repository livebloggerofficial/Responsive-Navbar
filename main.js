const menuIcon = document.querySelector(".navbar-container .menu-icon");
const mobileMenus = document.querySelector(".mobile-menus");

menuIcon.addEventListener("click", () => {
  mobileMenus.classList.toggle("active");
});
