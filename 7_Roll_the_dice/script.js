let dice = document.querySelector(".dice");
let outcome = document.querySelector(".outcome");
let rollBtn = document.querySelector(".rollBtn");
let sound = document.querySelector("#sound");

rollDice();

rollBtn.addEventListener("click", rollDice);

function rollDice() {
  sound.play();
  dice.classList.add("shake");
  setTimeout(() => {
    outcome.innerText = Math.floor(Math.random() * 6 + 1);

    if (outcome.innerText == 1) {
      dice.innerHTML = `<div class="one point"></div>`;
    } else if (outcome.innerText == 2) {
      dice.innerHTML = `<div class="two point"></div>
          <div class="two point"></div>`;
    } else if (outcome.innerText == 3) {
      dice.innerHTML = `<div class="three point"></div>
          <div class="three point"></div><div class="three point">`;
      dice.style.gap = "1rem";
    } else if (outcome.innerText == 4) {
      dice.innerHTML = `<div>
          <div class="point four"></div>
          <div class="point four"></div>
        </div>
        <div>
          <div class="point four"></div>
          <div class="point four"></div>
        </div>`;
      dice.style.flexDirection = "column";
      dice.style.gap = "1.5rem";
    } else if (outcome.innerHTML == 5) {
      dice.innerHTML = `<div class="pointRow">
          <div class="point six"></div>
          <div class="point six"></div>
      </div>
      <div>
          <div class="point six"></div>
      </div>
      <div class="pointRow">
          <div class="point six"></div>
          <div class="point six"></div>
      </div>
        `;
      dice.style.flexDirection = "column";
      dice.style.gap = "1.5rem";
    } else if (outcome.innerHTML == 6) {
      dice.innerHTML = `<div>
          <div class="point four"></div>
          <div class="point four"></div>
        </div>
        <div>
          <div class="point four"></div>
          <div class="point four"></div>
        </div>
        <div>
          <div class="point four"></div>
          <div class="point four"></div>
        </div>
        `;
      dice.style.flexDirection = "column";
      dice.style.gap = "1.5rem";
    }

    dice.classList.remove("shake");
  }, 1000);
}
