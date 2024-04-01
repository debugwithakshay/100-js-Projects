let colorBoxes = document.querySelectorAll(".colorBox");
let mainScreen = document.querySelector(".main");

//looping through all boxes to add eventListner
colorBoxes.forEach(function (colorBox) {
  colorBox.addEventListener("click", colorChange);
});

//execute this function when click on colorBox
function colorChange() {
  //taking background color of box
  let bgColorBox = getComputedStyle(this).backgroundColor;
  //inserting it on mainScreen
  mainScreen.style.backgroundColor = bgColorBox;
}
