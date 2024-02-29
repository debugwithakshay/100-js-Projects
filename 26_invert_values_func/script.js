function invertValues(myArray) {
  //new array to store invert digits
  let newArray = [];

  //looping through each item to check positive or negative
  for (let item of myArray) {
    if (item > 0) {
      newArray.push(-item);
    } else if (item < 0) {
      newArray.push(Math.abs(item));
    } else if (item == 0) {
      newArray.push(item);
    }
  }
  console.log(newArray);
}

invertValues([1, 2, 3, 4, 5]);
