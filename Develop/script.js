// Assignment code here

//will require the following
//uppercase letters
//lowercase letters
//numbers 
//special characters/symbols



const selectionOfCharacters = {
  alphabetLower: 'abcdefghijklmnopqrstuvwxyz',
  alphabetUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '`~!@#$%^&*>()?,_+/-=<[]{}|;":',
};

window.alert("Welcome to the Password Generator! We grant your wish of wanting a secure password based on the criteria of your choice. Please click 'Generate Password' to get started!");


// length of password
function generatePassword() {
 // include it as function to confirm characters as applicable 
  var passwordSet = ""; 

  var length = window.prompt("Welcome! For your password, how long do you want it? It can be from 8 characters to 128 characters. Please type a number between the range of 8 and 128.");


  if (length === "" || length === null) {
    alert("You need to provide a valid length number ranging from 8 characters to 128 characters. Please type again.");
    return generatePassword();
  }

  if (length < 8) {
    alert("The length of your password must be at least 8 characters. Please type a greater value.");
    return;
  }

  else if (length > 128) {
    alert("The length of your password must not exceed 128 characters. Please type a lower value.");
    return;
  } 

  

  var alphabetLower = confirm("First, would you like lowercase letters (ex: abcdefg...)? If yes, click 'OK'. If no, click 'CANCEL'."); 
  if (alphabetLower) {
    passwordSet += selectionOfCharacters.alphabetLower;
  };

  var alphabetUpper = confirm("Next, would you like capital letters (ex: ABCDEFG...)? If yes, click 'OK'. If no, click 'CANCEL'.");
  if (alphabetUpper) {
    passwordSet += selectionOfCharacters.alphabetUpper;
  };

  var numbers = confirm("How about numbers? These are added by single digit only (ex. 0-9). If yes, click 'OK'. If no, click 'CANCEL'. ");
  if (numbers) {
    passwordSet += selectionOfCharacters.numbers;
  };

  var symbols = confirm("Finally, would you like to implement special characters/symbols (ex: !%#@^...)? If yes, click 'OK'. If no, click 'CANCEL'.");
  if (symbols) {
    passwordSet += selectionOfCharacters.symbols;
  };

  var password = "";

  for (var i = 0; i < length; i++); 
  {password = Math.floor[Math.random(selectionOfCharacters.length)];}
  return password;

};
 
//figure out remainder of the function - 
//allow for cancellation of password making if allowable 

  






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
