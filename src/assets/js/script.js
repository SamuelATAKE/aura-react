const menuMobile = document.querySelector(".menu-mobile")
const navLinks = document.querySelector(".nav-links")

menuMobile.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu')
})