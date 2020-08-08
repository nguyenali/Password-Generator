//Variable for the elements to be manipulated by Javascript
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Variables for password generator
var Symbols ="`~!@#$%^&*()_-+={}[]/;:<>?/";
var Numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

