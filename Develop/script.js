// Assignment code here
const selectionOfCharacters = {
  alphabetLower: 'abcdefghijklmnopqrstuvwxyz',
  alphabetUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '`~!@#$%^&*>()?,_+/-=<[]{}|;":',
};

function generatePassword() {
  window.alert("Welcome to the Password Generator! We grant your wish of wanting a secure password based on the criteria of your choice. Please click 'Generate Password' to get started!");

  var passwordSet = "";

  var length = window.prompt("Welcome! For your password, how long do you want it? It can be from 8 characters to 128 characters. Please type a number between the range of 8 and 128.");

  if (length === "" || length === null) {
    alert("You need to provide a valid number ranging from 8 characters to 128 characters for the password length. Please type a valid entry.");
    return generatePassword();
  }

  if (length < 8 || length > 128) {
    alert("The length of your password must be at least 8 characters and not exceed 128 characters. Please type a valid number ranging from 8 to 128.");
    return generatePassword();
  }


  //with correct length entered in prompt window
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

  // may become a function itself again?
  if (alphabetLower != true && alphabetUpper !=true && numbers != true && symbols !=true) {
    alert("You must choose at least one character type for your password! The available options are lowercase alphabet letters, uppercase alphabet letters, numbers, and symbols/special characters.")
    alphabetLower = confirm("First, would you like lowercase letters (ex: abcdefg...)? If yes, click 'OK'. If no, click 'CANCEL'."); 
    alphabetUpper = confirm("Next, would you like capital letters (ex: ABCDEFG...)? If yes, click 'OK'. If no, click 'CANCEL'.");
    numbers = confirm("How about numbers? These are added by single digit only (ex. 0-9). If yes, click 'OK'. If no, click 'CANCEL'. ");
    symbols = confirm("Finally, would you like to implement special characters/symbols (ex: !%#@^...)? If yes, click 'OK'. If no, click 'CANCEL'.");
  }
 
  var completedPassword = ""; 
  for(var i = 0; i < length; i++); {
    completedPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
  }
  return completedPassword;
}
};
generatePassword();

 
//figure out remainder of the function - password first not visible on the webpage, password returns with only one character
  






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

