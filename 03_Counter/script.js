let counter = document.querySelector(".counter");

//increasing counter
let increaseBtn = document.querySelector(".increase-btn");
//---when click on increaseBtn
increaseBtn.addEventListener("click", increaseCounter);
function increaseCounter() {
  counter.innerText++;
}

//reseting counter
let resetBtn = document.querySelector(".reset-btn");
//---when click on resetBtn
resetBtn.addEventListener("click", resetCounter);
function resetCounter() {
  counter.innerText = 0;
}

//decreasing counter
let decreaseBtn = document.querySelector(".decrease-btn");
//---when click on decreaseBtn
decreaseBtn.addEventListener("click", decreaseCounter);
function decreaseCounter() {
  //condition to stop goin less than 0
  if (counter.innerText == "0") {
    null;
  } else if (counter.innerText > "0") {
    counter.innerText--;
  }
}
