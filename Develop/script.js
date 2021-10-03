// Assignment code here

//will require the following
//uppercase letters
//lowercase letters
//numbers 
//special characters/symbols
var passAlphaUpper = "";
var passAlphaLower = "";
var passNum = "";
var passSymbol = "";

var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "`~!@#$%^&*>()?,_+/-=<[]\.{}|;':";
var length;

var selectionOfElements = "alphaUpper, alphaLower, numbers, symbols";


window.alert("Welcome to the Password Generator! We grant your wish of wanting a secure password based on the criteria of your choice. Please click 'Generate Password' to get started!");


//should be placed prior to length - figure out appropriate grouping together and ways to implement for password generator
var passAlphaUpper = confirm("Next, would you like capital letters (ex: ABCDEFG...)?");
var passAlphaLower = confirm("Would you like lowercase letters to be added (ex: abcdefg...)?");
var passNum = confirm("How about numbers? These are added by single digit only (ex. 0-9).");
var passSymbol = confirm("Finally, would you like to implement special characters/symbols (ex: !%#@^...)?");


// length of password
function generatePassword() {
  window.prompt("Welcome! For your password, how long do you want it? It can be from 8 characters to 128 characters. Please type a number between the range of 8 and 128.");

if (length < 128 || length > 8); 
return length;
}


// {
//     window.prompt("For your next choice, would you like capital letters (ABC)?");

//     if (alphaUpper < 128 || alphaUpper > 8);
//     return alphaUpper;
//   }

// randomization of password with various characters when added 

// function randomNum() {
//   return [Math.floor(Math.random() * length)];
// };









//input is validated and only one selection is granted
//password is displayed on the page or on a window prompt option 





//leave these alone!!!
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
