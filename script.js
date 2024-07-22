const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

function checkPalindrome() {
  const textToCheck = cleanInputString(textInput.value).toUpperCase();
  if (textToCheck === "") {
    alert("Please input a value");
  }
  let j = textToCheck.length - 1;
  for (let i = 0; i < textToCheck.length / 2; i++) {
    if (textToCheck[i] != textToCheck[j]) {
      resultDiv.classList.remove("hidden");
      resultDiv.innerText = textInput.value.toUpperCase() + " is not a palindrome";
      return;
    }
    j--;
  }
  resultDiv.classList.remove("hidden");
  resultDiv.innerText = textInput.value.toUpperCase() + " is a palindrome";
  return;
}

function cleanInputString(str) {
  const regex = /[+-\s_,.:/()]/g;
  return str.replace(regex, "");
}

checkBtn.addEventListener("click", checkPalindrome);
