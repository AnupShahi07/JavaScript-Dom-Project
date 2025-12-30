const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value;

  // Requirement: alert if empty
  if (inputValue.trim() === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(inputValue)) {
    result.textContent = `${inputValue} is a palindrome.`;
  } else {
    result.textContent = `${inputValue} is not a palindrome.`;
  }
});
