// Assignment code here

//welcome message
window.alert("Welcome to the Password Generator! We grant your wish of wanting a secure password based on the criteria of your choice. Please click 'Generate Password' to get started!");

//started function
function generatePassword() {

  var passwordSet = "";

  var length = window.prompt("Welcome! For your password, how long do you want it? It can be from 8 characters to 128 characters. Please type a number between the range of 8 and 128.");

  //if length is not entered or entered incorrectly, it's sent back to restart at var length to 
  if (length === "" || length === null) {
    window.alert("You need to provide a valid number ranging from 8 characters to 128 characters for the password length. Please type a valid entry.");
    return generatePassword();
  }

  if (length < 8 || length > 128) {
    window.alert("The length of your password must be at least 8 characters and not exceed 128 characters. Please type a valid number ranging from 8 to 128.");
    return generatePassword();
  }

  //with correct length entered in prompt window, password can start generating 
  if (length >= 8 && length <= 128) {
  var alphabetLower = confirm("First, would you like lowercase letters (ex: abcdefg...)? If yes, click 'OK'. If no, click 'CANCEL'."); 
  if (alphabetLower) {
    passwordSet += selectionOfCharacters.alphabetLower;
  }
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

  //debugger;
  //restarts character selection but does not create a new password - so far new statement takes it back to restart making password again 
  if (alphabetLower != true && alphabetUpper !=true && numbers != true && symbols !=true) {
    window.alert("You must choose at least one character type for your password! The available options are lowercase alphabet letters, uppercase alphabet letters, numbers, and symbols/special characters.");
    return generatePassword();
   // alphabetLower = confirm("First, would you like lowercase letters (ex: abcdefg...)? If yes, click 'OK'. If no, click 'CANCEL'.");
    // alphabetUpper = confirm("Next, would you like capital letters (ex: ABCDEFG...)? If yes, click 'OK'. If no, click 'CANCEL'.");
    // numbers = confirm("How about numbers? These are added by single digit only (ex. 0-9). If yes, click 'OK'. If no, click 'CANCEL'. ");
    // symbols = confirm("Finally, would you like to implement special characters/symbols (ex: !%#@^...)? If yes, click 'OK'. If no, click 'CANCEL'.");
  }
 
  //completed/solved function that generates user input passwords
  var completedPassword = ""; 
  for(var i = 0; i < length; i++) {
    completedPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
  }
  return completedPassword;
  }
};

//variables for characters - lowercase letters, uppercase letters, numbers, and symbols
const selectionOfCharacters = {
  alphabetLower: 'abcdefghijklmnopqrstuvwxyz',
  alphabetUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '`~!@#$%^&*>()?,_+/-=<[]{}|;":',
};

//from first pull of document - do not alter
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

