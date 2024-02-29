function sumOfArray(myArray) {
  let totalSum = 0;
  for (item of myArray) {
    totalSum += item
  }
  console.log(totalSum);
}

sumOfArray([23, 12, 54, 24, 12]);
