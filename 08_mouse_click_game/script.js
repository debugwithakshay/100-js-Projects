let gameGround = document.querySelector(".game-border");
let gameScore = document.querySelector(".score");
let timerSec = document.querySelector(".timer-sec");

//when click on gameGround
gameGround.addEventListener("click", increaseScrore);
function increaseScrore() {
  //increase game score
  gameScore.innerText++;

  //also start timer
  if (timerSec.innerText == "60") {
    timerSec.innerText = "59";
    gameTimer();
  }
}

//start gametimer when click on ground
function gameTimer() {
  let myTimer = setInterval(() => {
    timerSec.innerText = padWithZero(--timerSec.innerText);

    //breaking timer when second react "00"
    if (timerSec.innerText == "00") {
      clearInterval(myTimer);
      gameGround.removeEventListener("click", increaseScrore);
    }
  }, 1000);
}

//insert a zeero when time is less than 10
function padWithZero(num) {
  return num < 10 ? "0" + num : num;
}
