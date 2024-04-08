let rollDiceBtn = document.querySelector(".roll-dice-btn");
let dice = document.querySelector(".dice");

//roll dice
rollDiceBtn.addEventListener("click", rollDice);
function rollDice() {
  dice.classList.add("shake-dice");

  setTimeout(() => {
    dice.classList.remove("shake-dice");
    //show result after shake
    generateRandomOutcome();
    showDiceResult();
  }, 2000);
}

//random dice outcome
let possibleOutsome = [1, 2, 3, 4, 5, 6];
let outcome;

function generateRandomOutcome() {
  let randomOutcome = Math.floor(Math.random() * 6) + 1;

  outcome = randomOutcome;
}
generateRandomOutcome();

//showing dice according to outcome
function showDiceResult() {
  switch (outcome) {
    case 1:
      //removing all classes
      dice.classList.forEach(function (diceclass) {
        dice.classList.remove(`${diceclass}`);
      });

      //addding important classes
      dice.classList.add("one");
      dice.classList.add("dice");

      //insering dots
      dice.innerHTML = `<div class="dice-dot"></div>`;
      break;

    case 2:
      //removing all classes
      dice.classList.forEach(function (diceclass) {
        dice.classList.remove(`${diceclass}`);
      });

      //addding important classes
      dice.classList.add("two");
      dice.classList.add("dice");

      //insering dots
      dice.innerHTML = `<div class="dice-dot"></div>
      <div class="dice-dot"></div>`;
      break;

    case 3:
      //removing all classes
      dice.classList.forEach(function (diceclass) {
        dice.classList.remove(`${diceclass}`);
      });

      //addding important classes
      dice.classList.add("three");
      dice.classList.add("dice");

      //insering dots
      dice.innerHTML = `<div class="dice-dot"></div>
        <div class="dice-dot"></div>
        <div class="dice-dot"></div>`;
      break;

    case 4:
      //removing all classes
      dice.classList.forEach(function (diceclass) {
        dice.classList.remove(`${diceclass}`);
      });

      //addding important classes
      dice.classList.add("four");
      dice.classList.add("dice");

      //insering dots
      dice.innerHTML = `
      <div class = "dot-row">
        <div class="dice-dot"></div>
        <div class="dice-dot"></div>
      </div>
      <div class = "dot-row">
        <div class="dice-dot"></div>
        <div class="dice-dot"></div>
      </div>`;

      break;

    case 5:
      //removing all classes
      dice.classList.forEach(function (diceclass) {
        dice.classList.remove(`${diceclass}`);
      });

      //addding important classes
      dice.classList.add("five");
      dice.classList.add("dice");

      //insering dots
      dice.innerHTML = `
      <div class = "dot-row">
        <div class="dice-dot"></div>
        <div class="dice-dot"></div>
      </div>
      <div class = "dot-row">
        <div class="dice-dot"></div>
      </div>
      <div class = "dot-row">
        <div class="dice-dot"></div>
        <div class="dice-dot"></div>
      </div>`;

      break;

    case 6:
      //removing all classes
      dice.classList.forEach(function (diceclass) {
        dice.classList.remove(`${diceclass}`);
      });

      //addding important classes
      dice.classList.add("six");
      dice.classList.add("dice");

      //insering dots
      dice.innerHTML = `
        <div class = "dot-row">
          <div class="dice-dot"></div>
          <div class="dice-dot"></div>
        </div>
        <div class = "dot-row">
          <div class="dice-dot"></div>
          <div class="dice-dot"></div>
        </div>
        <div class = "dot-row">
          <div class="dice-dot"></div>
          <div class="dice-dot"></div>
        </div>`;

      break;
  }
}
showDiceResult();
