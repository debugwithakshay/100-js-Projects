// Variables----------
let blocks = document.querySelectorAll(".block");
let statusText = document.querySelector(".status");
let resetBtn = document.querySelector(".resetBtn");
//--------------------

let turn = "X";
statusText.innerText = "X's Turn";
let winBlocks = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//changing player
for (let block of blocks) {
  block.addEventListener("click", changingPlayer);
}
function changingPlayer() {
  if (turn == "X" && this.innerText == "") {
    this.innerText = "X";
    turn = "O";
    statusText.innerText = "O's Turn";
  } else if (turn == "O" && this.innerText == "") {
    this.innerText = "O";
    turn = "X";
    statusText.innerText = "X's Turn";
  }
}

//Reseting
resetBtn.addEventListener("click", () => {
  for (let block of blocks) {
    block.addEventListener("click", changingPlayer)
    block.innerText = "";
    statusText.innerText = "X's Turn";
    turn = "X";
  }
});

//winning
for (let block of blocks) {
  block.addEventListener("click", checkwinning);
}

function checkwinning() {
  for (let winBlock of winBlocks) {
    let [a, b, c] = winBlock;
    let blockA = blocks[a].innerText;
    let blockB = blocks[b].innerText;
    let blockC = blocks[c].innerText;

    if (blockA !== "" && blockA == blockB && blockB == blockC) {
      //we got the winner
      statusText.innerText = `${blockA} Wins!`;
      disableClicks();
      return;
    }

    if (Array.from(blocks).every((block) => block.innerText !== "")) {
      statusText.innerText = "It's a Draw!";
    }
  }
}

function disableClicks() {
  for (let block of blocks) {
    block.removeEventListener("click", changingPlayer);
  }
}
