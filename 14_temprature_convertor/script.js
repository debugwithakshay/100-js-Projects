//altering temp units
let tempUnitExchangeIcon = document.querySelector("#exchange_icon");
let tempCard = document.querySelector(".temp-convert-card");

tempUnitExchangeIcon.addEventListener("click", alterUnit);

function alterUnit() {
  if (tempCard.classList.contains("ctf")) {
    tempCard.classList.replace("ctf", "ftc");
  } else if (tempCard.classList.contains("ftc")) {
    tempCard.classList.replace("ftc", "ctf");
  }
}

//running convertion machine according to unit
let inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("input", selectMachine);
});

function selectMachine() {
  if (tempCard.classList.contains("ctf")) {
    ctfMachine();
  } else if (tempCard.classList.contains("ftc")) {
    ftcMachine();
  }
}

//celsius to fah machine
function ctfMachine() {
  let celsiusInput = document.querySelector("#celsiusInput").value;

  if (!isNaN(Number(celsiusInput))) {
    //convertion of celsius to fah
    let fahrenheitInput = (document.querySelector("#fahrenheitInput").value =
      (celsiusInput * 9) / 5 + 32);

    
  } else {
    console.log("numbe likho");
  }
}

//fah to celsius machine
function ftcMachine() {
  let fahrenheitInput = document.querySelector("#fahrenheitInput").value;

  if (!isNaN(Number(fahrenheitInput) && fahrenheitInput !== "")) {
    celsiusInput = document.querySelector("#celsiusInput").value = (
      ((fahrenheitInput - 32) * 5) /
      9
    ).toFixed(4);
  } else {
    console.log("numbe likho");
  }
}
