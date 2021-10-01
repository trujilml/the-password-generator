// Assignment code here

//will require the following
// length of password
// different character types
//uppercase letters
//lowercase letters
//numbers 
//input is validated and only one selection is granted
//password is displayed on the page or on a window prompt option 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
