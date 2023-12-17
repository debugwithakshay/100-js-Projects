let input = document.querySelector("#input");
let findWord = document.querySelector(".find_word");
let phonetic = document.querySelector(".phonetic");
let paragraphSecondary = document.querySelectorAll(".paragraph-secondary");

let clearIcon = document.querySelector(".icon--close");
let searchIcon = document.querySelector(".icon--search");
let speakerIcon = document.querySelector(".icon--speaker");
let audioPlayer = document.querySelector("#audioPlayer");
let notFound = document.querySelector(".notFound");

// when press enter
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && input.value !== "") {
    searchWordToAPi();
  }
});

//clearing input
clearIcon.addEventListener("click", () => {
  input.value = "";
});

//searching when click search icon
searchIcon.addEventListener("click", () => {
  searchWordToAPi();
});

// function search word
function searchWordToAPi(e) {
  let wordRequest = new XMLHttpRequest();
  wordRequest.onload = function () {
    let response = JSON.parse(this.responseText);

    paragraphSecondary[1].innerText = "";
    paragraphSecondary[2].innerText = "";
    audioPlayer.setAttribute("src", "");

    //notfound
    if (response[0] == undefined) {
      notFound.style.display = "inline";
    } else if (response[0] !== undefined) {
      notFound.style.display = "none";
    }

    // assigning phonetic
    findWord.innerText = response[0].word;
    phonetic.innerText = response[0].phonetic;

    // assigning Meaning
    paragraphSecondary[0].innerText =
      response[0].meanings[0].definitions[0].definition;

    //assigning Example
    for (let meaningObject of response[0].meanings) {
      let myMeaningObject = meaningObject;

      for (let meaning of myMeaningObject.definitions) {
        if (meaning.example !== undefined) {
          paragraphSecondary[1].innerText = meaning.example;
          break;
        }
      }
    }

    //pronunciation
    speakerIcon.addEventListener("click", () => {
      for (let audioObjects of response[0].phonetics)
        if (audioObjects.audio !== "") {
          let audioLink = audioObjects.audio;
          audioPlayer.setAttribute("src", `${audioLink}`);
          audioPlayer.play();
        }
    });

    //loading synonyms
    for (let meaning of response[0].meanings) {
      if (meaning.synonyms.length > 1) {
        let synonymsItemsList = [];
        for (let synonymsItem of meaning.synonyms) {
          synonymsItemsList[synonymsItemsList.length] = synonymsItem;
          var synonymsWithComma = synonymsItemsList.join(", ");
        }
        paragraphSecondary[2].innerText = synonymsWithComma;
      }
    }
  };
  wordRequest.error = function () {
    console.log("failed");
  };
  wordRequest.open(
    "GET",
    `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
  );
  wordRequest.send();
}
