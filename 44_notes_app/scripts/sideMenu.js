const menuClose = document.querySelector(".icon--menuClose")
const menuOpen = document.querySelector(".icon--menuOpen")
const navbar = document.querySelector(".navbar")
const linkBox = document.querySelector(".navigation-link-box")
const defualtPage = document.querySelector(".default-page")


// closing navbar
menuClose.addEventListener("click", () => {
    navbar.style.width = "0px"
    menuClose.style.display = "none"
    linkBox.style.display = "none"
    defualtPage.style.width = "100%"
    menuOpen.style.display = "inline-block"
})

//opening navbar
menuOpen.addEventListener("click", () => {
    navbar.style.width = "80px"
    menuClose.style.display = "inline-block"
    linkBox.style.display = "flex"
    defualtPage.style.width = "calc(100% - 80px)"
    menuOpen.style.display = "none"
})