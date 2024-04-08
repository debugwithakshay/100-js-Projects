let coin = document.querySelector(".coin");

//randomly getting head or tail
const possibleOutcomes = ["HEAD", "TAIL"];
let outcome; //outcome is undefined now
function getRandomOutcome() {
  //getting random value
  let randomOutcome = possibleOutcomes[Math.floor(Math.random() * 2)];

  //assigning random value on outcome
  outcome = randomOutcome;
}
getRandomOutcome();

//flipping coin
let flipCoinBtn = document.querySelector(".flip-coin-btn");

flipCoinBtn.addEventListener("click", flipCoin);
function flipCoin() {
  coin.classList.add("flipping");

  //calling random outcome function
  getRandomOutcome();

  //stop coin after 3 sec
  setTimeout(() => {
    coin.classList.remove("flipping");
    //assigning result on coin
    document.querySelector(".coin-result").innerText = outcome;
    increaseScore();
    saveData();
  }, 2000);
}

//increasing score
let headScore = document.querySelector(".head-score");
let tailScore = document.querySelector(".tail-score");
function increaseScore() {
  if (outcome == "HEAD") {
    headScore.innerText++;
  } else if (outcome == "TAIL") {
    tailScore.innerText++;
  }
}

//resetting score
let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetScore);

function resetScore() {
  headScore.innerText = "0";
  tailScore.innerText = "0";
  localStorage.setItem("headScore", "0");
  localStorage.setItem("tailScore", "0");
}

//maintaining data after refresh
function saveData() {
  localStorage.setItem("headScore", headScore.innerText);
  localStorage.setItem("tailScore", tailScore.innerText);
}

//fetching score after refresh
function fetchDate() {
  headScore.innerText = localStorage.getItem("headScore");
  tailScore.innerText = localStorage.getItem("tailScore");
}
fetchDate();
