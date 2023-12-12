let backgroundImg = document.querySelector(".container");
let count = document.querySelector(".count");
let blurAmount = 20;

setInterval(() => {
  blurAmount--;
  backgroundImg.style.filter = `blur(${blurAmount}px)`;
}, 250);

let percentage = setInterval(() => {
    count.innerText++;
    if(count.innerText == 100){
        clearInterval(percentage)
    }
}, 50);
