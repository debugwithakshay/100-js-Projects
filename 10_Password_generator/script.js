//length = 92
//possible random num = 0 to 91
const allCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];

//showing password length value to user as track increase/decrease
let passwordLengthTrack = document.querySelector("#password_length");

function showpasswordLength() {
  //when page get refresh
  document.querySelector(".range_value").innerText = passwordLengthTrack.value;

  //when user increase/decrease track
  passwordLengthTrack.addEventListener("input", function () {
    document.querySelector(".range_value").innerText =
      passwordLengthTrack.value;
  });
}
showpasswordLength();

//will store generated password on this
let generatedPassword = "";

//generating a random num
function createRandNum() {
  let randomNum = Math.floor(Math.random() * 92);
  return randomNum;
}

//generating multiple random Num by looping according to user need
function generatePass() {
  //generating password
  for (let times = 1; times <= passwordLengthTrack.value; times++) {
    generatedPassword += allCharacters[createRandNum()];
  }

  //clearing previous password
  document.querySelector("#random_pass_box").value = "";

  //setting to input field
  document.querySelector("#random_pass_box").value = generatedPassword;

  //clearing previous password
  generatedPassword = "";
}

//generate password and set to input box after clicking btn
let generatePasswordBtn = document.querySelector(".generate_pass_btn");

generatePasswordBtn.addEventListener("click", generatePass);
