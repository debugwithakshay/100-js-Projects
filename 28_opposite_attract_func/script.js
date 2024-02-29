function lovefunc(flower1, flower2) {
  let flower1Petals = flower1 % 2 == 0;
  let flower2Petals = flower2 % 2 == 0;
  if (flower1Petals == flower2Petals) {
    console.log(false);
  } else {
    console.log(true);
  }
}

lovefunc(3, 4);
