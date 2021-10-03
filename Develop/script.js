// Assignment code here
var passwordLengthValue;
var upperCaseIncluded;
var lowerCaseIncluded;
var numbersIncluded;
var numbers = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
var upperCaseLetters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
var lowerCaseLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
var specialCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "*", "\(", "\)", "-", "="
]
//var passwordElements = [
  //upperCaseElement,
//]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //functions for determining password criteria. Function length, uppercase/lowercase included, special characters included
  passwordLength();

  upperCase();

  lowerCase()

};



//switch to determine action based on response to prompt


//prompt for lowercase
//var lowerCase = prompt("Would you like your password to include lowercase letters? Enter 'Y' for yes or 'N' for no.");

//prompt for numbers
//var numbers = prompt("Would you like your password to include numbers letters? Enter 'Y' for yes or 'N' for no.");

  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//function for password length
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

//prompt for uppercase
var upperCase = function() {
  upperCaseIncluded = window.prompt("Would you like your password to include uppercase letters? Enter 'Y' for yes or 'N' for no.");
  upperCaseIncluded = upperCaseIncluded.toLowerCase();
  if (upperCaseIncluded === "y") {
    window.alert ("Password will include uppercase letters");
  }
  else if (upperCaseIncluded === "n") {
    window.alert ("Password will not include uppercase letters");
  }
  else {
    window.alert("Please provide a valid response");
    upperCase()
  };
};

//prompt for lowercase
var lowerCase = function() {
  lowerCaseIncluded = window.prompt("Would you like your password to include lowercase letters? Enter 'Y' for yes or 'N' for no.");
  lowerCaseIncluded = lowerCaseIncluded.toLowerCase();
  if (lowerCaseIncluded === "y") {
    window.alert ("Password will include lowercase letters");
  }
  else if (lowerCaseIncluded === "n") {
    window.alert ("Password will not include lowercase letters");
  }
  else {
    window.alert("Please provide a valid response");
    lowerCase()
  }
};

//prompt for numbers
var numbers = function() {
  numbersIncluded = window.prompt("Would you like your password to include numbers? Enter 'Y' for yes or 'N' for no.");
  numbersIncluded = numbersIncluded.toLowerCase();
  if (numbersIncluded === "y") {
    window.alert ("Password will include numbers");
  }
  else if (numbersIncluded === "n") {
    window.alert ("Password will not include numbers");
  }
  else {
    window.alert("Please provide a valid response");
    numbers()
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
