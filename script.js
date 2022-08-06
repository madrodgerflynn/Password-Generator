// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function start() {
  var userInput = prompt(
    "Welcome to PW Generator, How many characters would you prefer out of 256?"
  );
  //logging the users choice
  var userChoice = userInput;
  console.log(userChoice);
  if ((userChoice == [8 - 128])) console.log([]);
}
function characters() {
  var userInput = prompt("Now please add any special charaters");
  var userChoice = userInput
  console.log(userChoice);
  if (userChoice == "!@#$%^&*()?") 
  console.log(userChoice)
}
function characters() {
  var userInput = prompt("Finally, ");
  var userChoice = userInput
  console.log(userChoice);
  if (userChoice == "!@#$%^&*()?") 
  console.log(userChoice)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
