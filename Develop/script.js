//Variable for the elements to be manipulated by Javascript
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompt for desired password character length 

var charlength = prompt("How many characters would you like your password to be? Password length can vary from 8 to 128 (Pick a number between 8 and 128!)")


//add the end brackt later)
if  ( charlength >= 8 && charlength<=128 {

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

//User prompt to ask which characters they would like to use
addSymbols = confirm("Would you like to add special characters? (i.e : !, #, $, *, etc..");

addNumbers =confirm("Would you like to add numbers? (i.e : 1,2,3, etc..");

AddLowerCase = confirm("Would you like to add lowercase letters? (i.e : a, b, c, etc..");

AddUppercase - confirm("Would you like to add uppercase letters? (i.e : A, B, C, etc..");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

