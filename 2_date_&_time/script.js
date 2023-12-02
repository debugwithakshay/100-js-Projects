//time variables
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let period = document.querySelector(".period")
//date variables
let day = document.querySelector(".day")
let date = document.querySelector(".date")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
//icon variables
let icon = document.querySelector(".icon")



function updateDateTime() {
  let dateTime = new Date();

  //time
  hour.innerText = (dateTime.getHours() <= 9) ? "0"+dateTime.getHours() : dateTime.getHours();
  minute.innerText = (dateTime.getMinutes() <= 9) ? "0"+dateTime.getMinutes() : dateTime.getMinutes();
  second.innerText = (dateTime.getSeconds() <= 9) ? "0"+dateTime.getSeconds() : dateTime.getSeconds();

  //period
  if (hour.innerText >= 12){
    period.innerText = "PM"
  }

  //date
  day.innerText = dateTime.toLocaleString("en-US", {weekday: "long"});
  date.innerText = dateTime.getDate();
  month.innerText = dateTime.toLocaleString("en-US", {month: "long"});
  year.innerText = dateTime.getUTCFullYear();

  //image according to time
  if(hour.innerText >= 6 & hour.innerText <= 18){
    icon.setAttribute("name", "sunny")
  } else{
    icon.setAttribute("name", "moon")
  }

}

setInterval(updateDateTime, 1000);
