function palindromeChecker(myString) {
  let reverseString = myString.split("").reverse().join("");
  if (reverseString == myString) {
    console.log("It's a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}

palindromeChecker("tenet");