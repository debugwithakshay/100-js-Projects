let numbers = document.querySelectorAll(".numbers")

let increment = 0;

const incrementCounter = setInterval(() => {
    increment++
    numbers.forEach((number) => {
        number.innerText ++;
    })
    console.log(increment);
    if(increment == 400){
        clearInterval(incrementCounter)
    }
}, 10)