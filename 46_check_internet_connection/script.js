let alertBox = document.querySelector(".alert__box");
let closeAlert = document.querySelector(".icon--close");
let alertHeading = document.querySelector(".alert--heading");
let alertDesc = document.querySelector(".alert--description");
let alertImg = document.querySelector(".icon--network");
let reconnectBtn = document.querySelector(".button--primary");
let timer = document.querySelector(".timer");
let timerValue = 30;

//reconnecting on timer
function startTimer() {
  var myTimer = setInterval(() => {
    alertDesc.innerHTML = `Your network is unavailable. We will attempt to reconnect you in <span class="timer">${timerValue}</span> Seconds`;
    if (timerValue == 0) {
      timerValue = 30;
      checkConnection();
    }
    timerValue--;
  }, 1000);
}

//reconnecting while pressing reconnect button
reconnectBtn.addEventListener("click", function () {
  checkConnection();
});

//sending a request to checkout status
const checkConnection = async () => {
  try {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user?size=1"
    );
    if (response.status == 200) {
      showonlineBox();
    }
  } catch (error) {
    console.log(error);
    showofflineBox();
  }
};
setInterval(checkConnection, 3000);

//when connection restored
function showonlineBox() {
  alertHeading.innerText = "Restored Connection";
  alertDesc.innerText = "Your device is now successfully to the internet";
  alertBox.style.borderTop = "3px solid rgb(79, 240, 79)";
  alertImg.classList.replace("icon--offline", "icon--online");
  alertImg.src = "assets/online.svg";
  reconnectBtn.classList.add("button--disabled");

  setTimeout(() => {
    alertBox.style.transform = "translate(-50%, -140px)";
  }, 3000);
}

//when connection close
function showofflineBox() {
  alertBox.style.transform = "translate(-50%, 0px)";
  alertHeading.innerText = "Lost Connection";
  alertBox.style.borderTop = "3px solid rgb(237, 68, 68)";
  alertImg.classList.replace("icon--online", "icon--offline");
  alertImg.src = "assets/offline.svg";
  reconnectBtn.classList.remove("button--disabled");
  if (timerValue == "30") {
    myTimer();
  }
}

//closing alert box
closeAlert.addEventListener("click", function () {
  alertBox.style.transform = "translate(-50%, -140px)";
});
