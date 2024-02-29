let hourDigital = document.querySelector(".hour");
let minuteDigital = document.querySelector(".minute");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let date = document.querySelector(".date");
let modeBtn = document.querySelector(".mode");

// -----
let dateBox = document.querySelector(".date--box");
let timeBox = document.querySelector(".clock--digital");
let minuteHand = document.querySelector(".hand--minute");
let hourHand = document.querySelector(".hand--hour");
let secondHand = document.querySelector(".hand--second");
// -----


//mode
let mode = "light";
modeBtn.addEventListener("click", () => {
  if (mode == "light") {
    mode = "dark";
    modeBtn.innerText = "Light mode";
    document.getElementsByTagName("body")[0].style.background = "#000";
    modeBtn.style.cssText = `background: #fff; color: #000`;
    dateBox.style.color = ` #fff`;
    timeBox.style.color = `#fff`;
    minuteHand.style.backgroundColor = `#fff`;
    hourHand.style.backgroundColor = `#fff`;
  } else if (mode == "dark") {
    mode = "light";
    modeBtn.innerText = "Dark mode";
    document.getElementsByTagName("body")[0].style.background = "#fff";
    modeBtn.style.cssText = `background: #000; color: #fff`;
    dateBox.style.color = ` #000`;
    timeBox.style.color = `#000`;
    minuteHand.style.backgroundColor = `#000`;
    hourHand.style.backgroundColor = `#000`;
  }
});

// digitalclock
function digialClock() {
  let dateTime = new Date();
  hourDigital.innerText = dateTime.getHours();
  minuteDigital.innerText = dateTime.getMinutes();
  day.innerText = `${dateTime.toLocaleString("en-us", { weekday: "long" })},`;
  month.innerText = dateTime.toLocaleString("en-us", { month: "short" });
  date.innerText = dateTime.getDate();
}


// analog clock
function analogClock() {
  let dateTime = new Date();
  secondHand.style.transform = `translateX(-50%) rotate(${
    dateTime.getSeconds() * 6
  }deg)`;

  hourHand.style.transform = `translateX(-50%) rotate(${
    dateTime.getHours() * 30
  }deg)`;

  minuteHand.style.transform = `translateX(-50%) rotate(${
    dateTime.getMinutes() * 6
  }deg)`;
}

setInterval(() => {
  digialClock();
  analogClock();
});
digialClock();
analogClock();
