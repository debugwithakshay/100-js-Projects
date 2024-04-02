let toast = document.querySelector(".toast");
let showToastBtn = document.querySelector(".open-toast-btn");

//showing toast when click on btn
showToastBtn.addEventListener("click", showToast);
function showToast() {
  toast.classList.add("toast_active");

  //cloasing after 5 second
  setTimeout(() => {
    closeToast();
  }, 5000);
}

//when click on close btn
let closeToastBtn = document.querySelector(".close_icon");

closeToastBtn.addEventListener("click", closeToast);
function closeToast() {
  toast.classList.remove("toast_active");
}
