console.log("Breaking Loop");
breakloop: for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    break breakloop;
  }
  console.log(i);
}

console.log("Continue Loop");
continueloop: for (let j = 0; j <= 10; j++) {
  if (j == 5) {
    continue continueloop;
  }
  console.log(j);
}
