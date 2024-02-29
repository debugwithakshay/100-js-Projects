function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 != 0) {
    console.log("fizz");
  } else if (num % 5 == 0 && num % 3 != 0) {
    console.log("buzz");
  } else if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizzbuzz");
  }
}

fizzBuzz(30);
