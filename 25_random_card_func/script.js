let card = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "King", "Queen", "Jack"];
let family = ["diamond", "heart", "spade", "club"];

function randomCard() {
  let randCard = Math.floor(Math.random() * 9 + 4);
  let randFamily = Math.floor(Math.random() * 4);
  console.log(`Card: ${card[randCard]},\nfamily: ${family[randFamily]}`);
}

randomCard();
