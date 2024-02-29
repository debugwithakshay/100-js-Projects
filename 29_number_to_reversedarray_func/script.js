function digitize(n) {
  // making given number a string so that we can iterate
  let num = String(n);

  //to store revesed number
  let reversedArray = [];

  for (let i = num.length - 1; i >= 0; i--) {
    reversedArray.push(Number(num[i]));
  }

  console.log(reversedArray);
}

digitize(94354);
