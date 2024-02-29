function vowelCounter(myString) {
  let totalVowels = 0;
  for (let char of myString) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      totalVowels++;
    }
  }
  console.log(`your string contains ${totalVowels} vowels`);
}

vowelCounter("javascript");
