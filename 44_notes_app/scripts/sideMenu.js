
// closing navbar
menuClose.addEventListener("click", menuCloseFunc);
function menuCloseFunc() {
  navbar.style.width = "0px";
  menuClose.style.display = "none";
  linkBox.style.display = "none";
  defualtPage.style.width = "100%";
  viewnotePage.style.width = "100%";
  addnotePage.style.width = "100%";
  for (let icon of menuOpen) {
    icon.style.display = "inline-block";
  }
}

//opening navbar
for (let icon of menuOpen) {
  icon.addEventListener("click", menuOpenFunc);
}

function menuOpenFunc() {
  navbar.style.width = "80px";
  menuClose.style.display = "inline-block";
  linkBox.style.display = "flex";
  defualtPage.style.width = "calc(100% - 80px)";
  viewnotePage.style.width = "calc(100% - 80px)";
  addnotePage.style.width = "calc(100% - 80px)";
  for (let icon of menuOpen) {
    icon.style.display = "none";
  }
}

//menu open-close during window resizing
window.addEventListener("resize", screenSizeChecker);
function screenSizeChecker() {
  if (window.innerWidth <= 800) {
    menuCloseFunc();
  } else if (window.innerWidth > 800) {
    menuOpenFunc();
  }
}
screenSizeChecker();
