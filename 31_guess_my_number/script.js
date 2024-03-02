//generating a random number from 1 to 20
let randNum;
function generateRand() {
  randNum = Math.floor(Math.random() * 20 + 1);
}
generateRand();

//when user click on check btn
let checkBtn = document.querySelector(".checkBtn");
let userInput = document.querySelector("#input");
let score = document.querySelector(".score");
let statusText = document.querySelector(".status");
let highScore = document.querySelector(".highScore");
let randNumCover = document.querySelector(".randomNumber");

//sounds variables
let wrongSound = document.querySelector("#wrongSound");
let gameoverSound = document.querySelector("#gameoverSound");
let matchedSound = document.querySelector("#matchedSound");

checkBtn.addEventListener("click", checkNumber);
function checkNumber() {
  console.log(userInput.value, randNum);
  if (userInput.value !== "" && userInput.value < randNum) {
    statusText.innerText = "Go Higher";
    decreaseScore();
    wrongSound.play();
  } else if (userInput.value !== "" && userInput.value > randNum) {
    statusText.innerText = "Go Low";
    decreaseScore();
    wrongSound.play();
  } else if (userInput.value !== "" && userInput.value == randNum) {
    statusText.innerText = "You Won";
    matchedSound.play();
    winning();
  }
}

//decreasing score on wrong guess
function decreaseScore() {
  if (userInput.value !== randNum) {
    score.innerText--;
  }
}

//when won
function winning() {
  randNumCover.innerText = randNum;
  checkBtn.disabled = true;
  checkBtn.style.cursor = "not-allowed";
  if (highScore.innerText < score.innerText) {
    highScore.innerText = score.innerText;
  }
}

//play Again
let playAgainBtn = document.querySelector(".againBtn");
playAgainBtn.addEventListener("click", playAgain);
function playAgain() {
  generateRand();
  checkBtn.disabled = false;
  checkBtn.style.cursor = "pointer";
  statusText.innerText = "Start Guessing";
  userInput.value = "";
  randNumCover.innerText = "?";
  score.innerText = "20"
}
