let bulb = document.querySelector(".bulb");
let bulbSwitch = document.querySelector(".switch");

//turning bulb on/off when click on bulbSwitch
bulbSwitch.addEventListener("click", bulbWorking);
function bulbWorking() {
  //check switch innerText
  if (bulbSwitch.innerText == "Off") {
    bulbSwitch.innerText = "On";
    bulb.classList.replace("bulb_off", "bulb_on");
  } else if (bulbSwitch.innerText == "On") {
    bulbSwitch.innerText = "Off";
    bulb.classList.replace("bulb_on", "bulb_off");
  }
}