//Variable for the elements to be manipulated by Javascript
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompt for desired password character length 

var charlength = prompt("How many characters would you like your password to be? Password legnth can vary from 8 to 128")

//Variables for characters for password generator
var symbols ="`~!@#$%^&*()_-+={}[]/;:<>?/";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Variable to add characters for password generator together
var a = symbols + numbers;
var b = symbols + uppercase;
var c = symbols + lowercase;
var d = numbers + lowercase;
var e = numbers + uppercase;
var f = lowercase + uppercase;
var g = symbols + numbers + lowercase;
var h = symbols + numbers + uppercase;
var i = symbols + lowercase + uppercase;
var j = numbers + lowercase + uppercase;
var k = symbols + numbers + lowercase + uppercase;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

