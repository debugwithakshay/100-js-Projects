function removeExclamationMarks(s) {
  let modifiedString = "";

  for(let char of s){
    if(char !== "!"){
        modifiedString += char
    }
  }

  console.log(modifiedString);
}

removeExclamationMarks("Hello World!");