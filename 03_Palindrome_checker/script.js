//getting input from user when click on btn
let palindromeInput = document.querySelector(".palindrome-input");
let checkPalindromeBtn = document.querySelector(".checkBtn");
checkPalindromeBtn.addEventListener("click", checkPalindrome);

//check palindrome function
function checkPalindrome() {
  let originalWord = palindromeInput.value;
  let reversedWord = palindromeInput.value.split("").reverse().join("");
  let resultText = document.querySelector(".result-text");

  //for empty input
  if (originalWord == "") {
    resultText.innerText = "Input can't be empty";
  }

  //checking palindrome
  if (originalWord == reversedWord) {
    resultText.innerHTML = `Yes, <span class="user-word">"${originalWord}"</span> is a palindrome!`;
  } else if (originalWord != reversedWord) {
    resultText.innerHTML = `No, <span class="user-word">"${originalWord}"</span> is not a palindrome!`;
  }
}
