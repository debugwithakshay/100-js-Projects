let beforeBtn = document.querySelector(".before");
let nextBtn = document.querySelector(".next");
// ---------
let heroGender = document.querySelector(".gender");
let heroImage = document.querySelector(".image__container");
let heroName = document.querySelector(".name");
let heroHeight = document.querySelector(".height");
let heroWeight = document.querySelector(".weight");
let heroHairColor = document.querySelector(".hairColor");
//----------

let heroId = 1;
fetchHero();

beforeBtn.addEventListener("click", () => {
  if (heroId == 1) {
    return;
  } else {
    heroId--;
    fetchHero();
  }
});

nextBtn.addEventListener("click", () => {
  heroId++;
  fetchHero();
});

function fetchHero() {
  let myRequest = new XMLHttpRequest();

  myRequest.onload = function () {
    let response = JSON.parse(this.responseText);
    heroName.innerText = response.name;
    heroImage.style.cssText = ` background: url("${response.images.lg}");
    background-size: cover;`;
    heroGender.innerText = response.appearance.gender;
    heroHeight.innerText = response.appearance.height[0];
    heroWeight.innerText = response.appearance.weight[1];
    heroHairColor.innerText = response.appearance.hairColor;

    console.log(response.id);
  };

  myRequest.onerror = function () {
    console.log("Request failed");
  };

  myRequest.open(
    "GET",
    `https://akabab.github.io/superhero-api/api/id/${heroId}.json`
  );
  myRequest.send();
}
  