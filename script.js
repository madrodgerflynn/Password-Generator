// Assignment Code
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowerCase = "abcdefghijklmnopqrstuvwxyz";
specialCharacters = "!@#$%^&*";
numberCharacters = "0123456789";

criteria = [lowerCase, upperCase, specialCharacters, numberCharacters];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}
function start() {
  mathGenerator = "";
  finalPassword = "";
  var userInput = prompt(
    "Welcome to PW Generator, How many characters would you prefer 128?"
  );

  var specChar = confirm("Would you like special characters?");

  var numbChar = confirm("Would you like any numbers?");

  var lowerInput = confirm("woudl you like lowercase letters?");
  var upperInput = confirm("Would like uppercase letters?");

  var valueList = [lowerInput, upperInput, specChar, numbChar];
  for (var i = 0; i < 4; i++) {
    if (valueList[i] == true) {
      mathGenerator += criteria[i];
    }
  }
  for (var n = 0; n < userInput; n++) {
    finalPassword +=
      mathGenerator[Math.floor(Math.random() * mathGenerator.length)];
  }
  console.log(finalPassword);
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = finalPassword;
}
function generatePassword() {
  start();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
