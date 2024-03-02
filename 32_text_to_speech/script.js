let userInput = document.querySelector("#textArea").value;
let speakBtn = document.querySelector(".btn");

speakBtn.addEventListener("click", function () {
  let utterance = new SpeechSynthesisUtterance(userInput);
  speechSynthesis.speak(utterance);
});
