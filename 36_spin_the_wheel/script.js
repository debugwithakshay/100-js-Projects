let spinner = document.querySelector(".spinner");
let stopper = document.querySelector(".stopper");
let spinBtn = document.querySelector(".spinBtn");
let parts = document.querySelectorAll(".part");



spinBtn.addEventListener("click", () => {
  rotationValue = Math.ceil(Math.random() * 3600);
  spinner.style.transform = `rotate(${rotationValue}deg)`;
});


