let alertBox = document.querySelector(".alert__box");
let closeAlert = document.querySelector(".icon--close");
let alertHeading = document.querySelector(".alert--heading");
let alertDesc = document.querySelector(".alert--description");
let alertImg = document.querySelector(".icon--network")

//sending a request to checkout status
const checkConnection = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
  alertImg.classList.replace("icon--offline", "icon--online")
  alertImg.innerText = "wifi"

  setTimeout(() => {
    alertBox.style.transform = "translate(-50%, -140px)";
  }, 3000);
}

//when connection close
function showofflineBox(){
  alertBox.style.transform = "translate(-50%, 0px)";
  alertHeading.innerText = "Lost Connection";
  alertDesc.innerText = "Your device is now successfully to the internet";
  alertBox.style.borderTop = "3px solid rgb(79, 240, 79)";
  alertImg.classList.replace("icon--offline", "icon--offline")
  alertImg.innerText = "wifi_off"
}

//closing alert box
closeAlert.addEventListener("click", function () {
  alertBox.style.transform = "translate(-50%, -140px)";
});
