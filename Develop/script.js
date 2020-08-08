//Variable for the elements to be manipulated by Javascript
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Variables for characters for password generator
var symbols ="`~!@#$%^&*()_-+={}[]/;:<>?/";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Variable to add characters for password generator toegther
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

