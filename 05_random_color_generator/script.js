let hexBoxes = document.querySelectorAll(".color_box");
let copyFlag = document.querySelector(".copyflag");
let colorHex = document.querySelector(".color_hex");
let refreshBtn = document.querySelector(".refresh");

//executing generate hex on site load
generateHex();

//initlize copy flag and copied to clipboard
for (let hexBox of hexBoxes) {
  // initilize copy flag
  hexBox.addEventListener("click", function () {
    copyFlag.style.transform = `translate(0px, -70px)`;
    copyFlag.style.opacity = `1`;
    navigator.clipboard.writeText(hexBox.children[1].children[1].innerText);

    //hiding copy flag
    setTimeout(() => {
      copyFlag.style.transform = `translate(0px, 0px)`;
      copyFlag.style.opacity = `0`;
    }, 2500);
  });
}

//refresh button working
refreshBtn.addEventListener("click", generateHex);

//generating random hex
function generateHex() {
  for (hexBox of hexBoxes) {
    let randowHex = `#${Math.floor(Math.random() * 10000000).toString(16)}9d`;
    hexBox.children[0].style.backgroundColor = randowHex;
    hexBox.children[1].children[1].innerText = randowHex;
  }
}
