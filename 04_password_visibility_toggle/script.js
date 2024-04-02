let passwordInput = document.querySelector("#passwordInput");
let visibilityIcon = document.querySelector(".visibility_icon");

//check click on visibility icon
visibilityIcon.addEventListener("click", toggleVisibility);

function toggleVisibility() {
  //checking type of input
  if (passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text");
    visibilityIcon.src = "assets/visible_on.svg";
  } else if (passwordInput.getAttribute("type") == "text") {
    passwordInput.setAttribute("type", "password");
    visibilityIcon.src = "assets/visible_off.svg";
  }
}
