//variable assignment for password textbox where the password is to appear
var passwordText = document.querySelector("#password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//variables for prompt responses
var passwordLengthValue;
var upperCaseIncluded;
var lowerCaseIncluded;
var numbersIncluded;

//variables for arrays containing character lists
var numbersList = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

var upperCaseLettersList = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

var lowerCaseLettersList= [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

var specialCharactersList = [
  "!", "@", "#", "$", "%", "^", "&", "*", "\(", "\)", "-", "="
]

//array that the used character lists will be concatenated to
var charactersUsed = [
]

//array that the password is written to
var password = [
]

// Write password to the #password input
function writePassword() {

  //reset password array and charactersUsed array in case it was already used
  password = [];
  charactersUsed = [];

  //functions for determining password criteria. Function length, uppercase/lowercase included, special characters included, if they are included push to the
  //characters used array. 
  passwordLength();

  upperCase();

  lowerCase();

  numbers();

  specialCharacters();

  passwordGenerator();

  passwordText.innerText = password

};

//function that asks the user for the desired password length
var passwordLength = function() {
  passwordLengthValue = window.prompt("How long should the password be? value must be between 8 and 128 characters");
  passwordLengthValue = parseInt(passwordLengthValue);

  if (passwordLengthValue >= 8 && passwordLengthValue <= 128) {
    window.alert("Password length accepted")
  }
  else {
    window.alert("You did not pick a valid option. Try again");
    passwordLength()
  }
};

//function that prompts user if they want upper case characters in the password
var upperCase = function() {
  upperCaseIncluded = window.prompt("Would you like your password to include uppercase letters? Enter 'Y' for yes or 'N' for no.");
  upperCaseIncluded = upperCaseIncluded.toLowerCase();
  if (upperCaseIncluded === "y") {
    window.alert ("Password will include uppercase letters");
    charactersUsed = charactersUsed.concat(upperCaseLettersList);
  }
  else if (upperCaseIncluded === "n") {
    window.alert ("Password will not include uppercase letters");
  }
  else {
    window.alert("Please provide a valid response");
    upperCase()
  };
};

//function that prompts user if they want lower case characters in the password
var lowerCase = function() {
  lowerCaseIncluded = window.prompt("Would you like your password to include lowercase letters? Enter 'Y' for yes or 'N' for no.");
  lowerCaseIncluded = lowerCaseIncluded.toLowerCase();
  if (lowerCaseIncluded === "y") {
    window.alert ("Password will include lowercase letters");
    charactersUsed = charactersUsed.concat(lowerCaseLettersList);
  }
  else if (lowerCaseIncluded === "n") {
    window.alert ("Password will not include lowercase letters");
  }
  else {
    window.alert("Please provide a valid response");
    lowerCase()
  }
};

//function that prompts user if they want numbers in the password
var numbers = function() {
  numbersIncluded = window.prompt("Would you like your password to include numbers? Enter 'Y' for yes or 'N' for no.");
  numbersIncluded = numbersIncluded.toLowerCase();
  if (numbersIncluded === "y") {
    window.alert ("Password will include numbers");
    charactersUsed = charactersUsed.concat(numbersList);
  }
  else if (numbersIncluded === "n") {
    window.alert ("Password will not include numbers");
  }
  else {
    window.alert("Please provide a valid response");
    numbers()
  }
};

//function that prompts user if they want special characters in the password
var specialCharacters = function() {
  specialCharactersIncluded = window.prompt("Would you like your password to include special characters? Enter 'Y' for yes or 'N' for no.");
  specialCharactersIncluded = specialCharactersIncluded.toLowerCase();
  if (specialCharactersIncluded === "y") {
    window.alert ("Password will include special characters");
    charactersUsed = charactersUsed.concat(specialCharactersList);
  }
  else if (specialCharactersIncluded === "n") {
    window.alert ("Password will not include numbers");
  }
  else {
    window.alert("Please provide a valid response");
    specialCharactersIncluded()
  }
};

var passwordGenerator = function() {
  for (i=0; i<passwordLengthValue; i++) {
    var ArrayRandom = Math.floor(Math.random() * (charactersUsed.length));
    password = password.concat(charactersUsed[ArrayRandom]);
    password = password.toString();
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
