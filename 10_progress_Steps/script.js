const progress = document.querySelector(".progress");
const prev = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");
const circles = document.querySelectorAll(".circle");

let curruntActive = 1;

next.addEventListener("click", () => {
  curruntActive++;
  if (curruntActive > circles.length) {
    curruntActive = circles.length;
  }
  updatingCircle();
});

prev.addEventListener("click", () => {
  curruntActive--;
  if (curruntActive < 1) {
    curruntActive = 1;
  }
  updatingCircle();
});

function updatingCircle() {
  circles.forEach((circle, index) => {
    if (index < curruntActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + "%";

  if(curruntActive === 1) {
    prev.classList.add("disabled")
    next.classList.remove("disabled")
  } else if(curruntActive === 4){
    prev.classList.remove("disabled")
    next.classList.add("disabled")
  } else{
    prev.classList.remove("disabled")
    next.classList.remove("disabled")
  }
}
