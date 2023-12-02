const numbers = document.querySelectorAll(".numberkey");
const operations = document.querySelectorAll(".operatorkey");
const input = document.querySelector(".display");
const backSpace = document.querySelector(".backspacekey");
const equal = document.querySelector(".equalkey");
const clear = document.querySelector(".clearkey");
const parenOpen = document.querySelector(".parenOpen")
const parenClose = document.querySelector(".parenClose")

//paren to display
parenOpen.addEventListener("click", function(){
  input.value += "*("
})
parenClose.addEventListener("click", function(){
  input.value += ")*"
})

//adding numbers to display
for (let number of numbers) {
  number.addEventListener("click", addToDisplay);
}

//adding operator to display
for (let operator of operations) {
  operator.addEventListener("click", addToDisplay);
}

// adding to display function
function addToDisplay() {
  input.value += this.innerText;
}

// Backspacing working
backSpace.addEventListener("click", function () {
  let myInput = String(input.value);
  let newValue = myInput.slice(0, myInput.length - 1);
  myInput = newValue;
  input.value = newValue;
});

//calculating value when press Equal
equal.addEventListener("click", function(){
  input.value = eval(input.value)
})

//clearing display
clear.addEventListener("click", function(){
  input.value = ""
})