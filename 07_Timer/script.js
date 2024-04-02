let second = document.querySelector("#second");
let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour");

//setting timer as per custom time snippet
let customeTimeSnippets = document.querySelectorAll(".custom-time");
//---when click on a custom time
customeTimeSnippets.forEach(function (snippet) {
  snippet.addEventListener("click", customTimeSetter);
});

function customTimeSetter() {
  //setting hour
  hour.value = this.innerText.slice(0, 2);
  //setting min
  minute.value = this.innerText.slice(3, 5);
  //setting second
  second.value = this.innerText.slice(6, 8);
}

//validate wrong input
let startBtn = document.querySelector(".start-btn");
//---when click on start btn
startBtn.addEventListener("click", validateInput);
function validateInput() {
  //when hour is greater than 100
  if (hour.value > 99) {
    initPopup("Hour should always less than 100");
  }
  //when minute greater than 59
  else if (minute.value > 59) {
    initPopup("Minute should always less than 60");
  }
  //when second greater than 59
  else if (second.value > 59) {
    initPopup("Second should always less than 60");
  }
  //when every input is right
  else if (hour.value < 100 && minute.value < 60 && second.value < 60) {
    startTimer();
  }
}

//popup working
function initPopup(msg) {
  //selecting popup and popup msg element
  let popup = document.querySelector(".popup");
  let popupMsg = document.querySelector(".popup-msg");

  //initializing popup
  popup.style.bottom = "20px";
  popup.style.display = "inline";

  //making popup vanish again
  setTimeout(() => {
    popup.style.bottom = "-100px";
    popup.style.display = "none";
  }, 4000);

  popupMsg.innerText = msg;
}

//starting timer
function startTimer() {
  //removing event listner for avoiding multiple timer
  startBtn.removeEventListener("click", validateInput);
  startBtn.style.backgroundColor = "rgb(127, 127, 235)";
  startBtn.style.cursor = "not-allowed";

  //filling empty spots with 00
  let spots = [second, minute, hour];
  for (let spot of spots) {
    if (spot.value == "") {
      spot.value = "00";
    }
  }

  //timer
  let timerInterval = setInterval(() => {
    //minute working
    if (minute.value !== "00") {
      if (second.value == "00") {
        second.value = "59";
        minute.value = padWithZero(--minute.value);
      }
    }

    //hour working
    if (hour.value !== "00") {
      if (minute.value == "00") {
        minute.value = "59";
        hour.value = padWithZero(--hour.value);
      }
    }

    //second working
    second.value = padWithZero(--second.value);

    //stoping timer, when all three becomes "00"
    if (hour.value == "00" && minute.value == "00" && second.value == "00") {
      clearInterval(timerInterval);
      startBtn.addEventListener("click", validateInput);
      startBtn.style.backgroundColor = "rgb(82, 82, 238)";
      startBtn.style.cursor = "pointer";
    }
  }, 1000);
}

//padding with zero, when num less than 10
function padWithZero(num) {
  return num < 10 ? "0" + num : num;
}
