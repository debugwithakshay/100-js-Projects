let jokeBtn = document.querySelector(".jokeBtn");
let jokeSection = document.querySelector(".joke");

jokeLoadFunction();

jokeBtn.addEventListener("click", jokeLoadFunction);

function jokeLoadFunction() {
  //sending xml http request
  let jokeRequest = new XMLHttpRequest();

  //response of success
  jokeRequest.onload = function () {
    let myResponse = this.responseText;
    let parsedResponse = JSON.parse(myResponse);
    jokeSection.innerText = parsedResponse.joke;
  };

  //response of error
  jokeRequest.onerror = function () {
    console.log("fail");
  };

  jokeRequest.open("GET", "https://v2.jokeapi.dev/joke/any?type=single");
  jokeRequest.send();
  console.log("Request Send SuccessFully");
}
