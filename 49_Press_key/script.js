let key = document.querySelector(".key");
let keySentence = document.querySelector(".key_sentence")

keySentence.innerText = `Please Press a Key`;

document.addEventListener("keydown", (e) => {
  keySentence.innerHTML = `You Pressed <span class="key">${e.key}</span> Key`;
});