let mobileMenu = document.querySelector(".menu-phone");

let openMenuBtn = document.querySelector(".burger-menu-icon");

// opening mobile menu
openMenuBtn.addEventListener("click", openMenu);
function openMenu() {
  mobileMenu.classList.replace("menu-phone-close", "menu-phone-open")
}

//closing mobile menu
let closeMenuBtn = document.querySelector(".close-menu-icon");
closeMenuBtn.addEventListener("click", closeMenu);
function closeMenu() {
    mobileMenu.classList.replace("menu-phone-open", "menu-phone-close")
}