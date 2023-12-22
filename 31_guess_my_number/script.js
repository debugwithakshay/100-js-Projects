let randomNumber = document.querySelector(".randomNumber");
let input = document.querySelector("#input");
let checkbtn = document.querySelector(".checkBtn");
let playAgainBtn = document.querySelector(".againBtn")
let statusText = document.querySelector(".status");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highScore");
let body = document.getElementsByTagName("body");
let cover = document.querySelector(".randomNumberBoxCover")

//sound effects variables
let gameoverSound = document.querySelector("#gameoverSound")
let matchedSound = document.querySelector("#matchedSound")
let wrongSound = document.querySelector("#wrongSound")
generateRandomNumber();

//generating Random Number
function generateRandomNumber() {
  let generatedRandomNumber = Math.floor(Math.random() * 20 + 1);
  randomNumber.innerText = generatedRandomNumber;
}

//checking input with random number
checkbtn.addEventListener("click", () => {
  // if larger
  if (randomNumber.innerText > input.value && score.innerText != 0) {
    statusText.innerText = "Go high";
    wrongSound.play()
    score.innerText--;
    // changing color
    body[0].classList.replace("normal", "wrong");
    setInterval(() => {
      body[0].classList.replace("wrong", "normal");
    }, 300);
  }

  //if equal
  else if (randomNumber.innerText === input.value) {
    statusText.innerText = "Matched";
    matchedSound.play()
    score.innerText--;
    setHighScore();
    cover.style.transform = "scale(0)"
    body[0].classList.replace("normal", "correct");
  }

  //if smaller
  else if (randomNumber.innerText < input.value && score.innerText != 0) {
    statusText.innerText = "Go Low";
    wrongSound.play()
    score.innerText--;
    // changing color
    body[0].classList.replace("normal", "wrong");
    setInterval(() => {
      body[0].classList.replace("wrong", "normal");
    }, 500);
  }

  score.innerText == 0 ? gameover() : console.log();
});

//setting HighScore
function setHighScore() {
  if (score.innerText > highScore.innerText) {
    highScore.innerText = score.innerText;
  }
}

//gameover
function gameover() {
  if (score.innerText == 0) {
    score.innerText = 0;
    statusText.innerText = "Game Over"
    gameoverSound.play()
    body[0].classList.replace("normal", "wrong");
  }
}

playAgainBtn.addEventListener("click", () => {
    cover.style.transform = "scale(1)"
    generateRandomNumber()
    score.innerText = 20;
    if(body[0].classList[0] == "correct"){
        body[0].classList.replace("correct", "normal");
    } else if(body[0].classList[0] == "wrong"){
        body[0].classList.replace("correct", "normal");
    }
})