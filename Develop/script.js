//Variable for the elements to be manipulated by Javascript
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");


// Add event listener to generate button
generateBtn.addEventListener("click", function () {


//Prompt for desired password character length 
//change back to charLenght if needed
var charLength = prompt("How many characters would you like your password to be? Password length can vary from 8 to 128 (Pick a number between 8 and 128!)");


//add the end brackt later)
if  ((charLength >= 8) && (charLength<= 128)) {

  //Variables for characters for password generator
  let symbols ="`~!@#$%^&*()_-+={}[]/;:<>?/";
  let numbers = "0123456789";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //string for new password;
  let newPassword = "";


  //User prompt to ask which characters they would like to use
  let addSymbols = confirm("Would you like to add special characters? i.e : !, #, $, *, etc..");
  let addNumbers =confirm("Would you like to add numbers? i.e : 1,2,3, etc..");
  let addLowerCase = confirm("Would you like to add lowercase letters? i.e : a, b, c, etc..");
  let addUppercase = confirm("Would you like to add uppercase letters? i.e : A, B, C, etc..");
  
  //Variable to add characters for password generator together
  let a = symbols + numbers + lowercase + uppercase;
  let b = symbols + numbers;
  let c = symbols + uppercase;
  let d = symbols + lowercase;
  let e = numbers + lowercase;
  let f = numbers + uppercase;
  let g = lowercase + uppercase;
  let h = symbols + numbers + lowercase;
  let i = symbols + numbers + uppercase;
  let j = symbols + lowercase + uppercase;
  let k = numbers + lowercase + uppercase;


  //Loop statements defining password combinations

  if ((addSymbols === true) && (addNumbers === true) && (addLowerCase === true) && (addUppercase === true)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *a.length);
      newPassword +=a.charAt(character, character+1);
    }
  }
  else if ((addSymbols === true) && (addNumbers === true) && (addLowerCase === false) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *b.length);
      newPassword +=b.charAt(character, character+1);
    }
  }
  else if ((addSymbols === true) && (addNumbers === false) && (addLowerCase === false) && (addUppercase === true)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *c.length);
      newPassword +=c.charAt(character, character+1);
    }
  }
  else if ((addSymbols === true) && (addNumbers === false) && (addLowerCase === true) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *d.length);
      newPassword +=d.charAt(character, character+1);
    }
  }
  else if ((addSymbols === false) && (addNumbers === true) && (addLowerCase === true) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *e.length);
      newPassword +=e.charAt(character, character+1);
    }
  }
  else if ((addSymbols === false) && (addNumbers === true) && (addLowerCase === false) && (addUppercase === true)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *f.length);
      newPassword +=f.charAt(character, character+1);
    }
  }
  else if ((addSymbols === false) && (addNumbers === false) && (addLowerCase === false) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *g.length);
      newPassword +=g.charAt(character, character+1);
    }
  }
  else if ((addSymbols === true) && (addNumbers === true) && (addLowerCase === true) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *h.length);
      newPassword +=h.charAt(character, character+1);
    }
  }
  else if ((addSymbols === true) && (addNumbers === true) && (addLowerCase === false) && (addUppercase === true)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *i.length);
      newPassword +=i.charAt(character, character+1);
    }
  }
  else if ((addSymbols === true) && (addNumbers === false) && (addLowerCase === true) && (addUppercase === true)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *j.length);
      newPassword +=j.charAt(character, character+1);
    }
  }
  else if ((addSymbols === false) && (addNumbers === true) && (addLowerCase === true) && (addUppercase === true)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *k.length);
      newPassword +=k.charAt(character, character+1);
    }
  }
  else if ((addSymbols === true) && (addNumbers === false) && (addLowerCase === false) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *symbols.length);
      newPassword +=symbols.charAt(character, character+1);
    }
  }
  else if ((addSymbols === false) && (addNumbers === true) && (addLowerCase === false) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *numbers.length);
      newPassword +=numbers.charAt(character, character+1);
    }
  }
  else if ((addSymbols === false) && (addNumbers === false) && (addLowerCase === true) && (addUppercase === false)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *lowercase.length);
      newPassword +=lowercase.charAt(character, character+1);
    }
  }
  else if ((addSymbols === false) && (addNumbers === false) && (addLowerCase === false) && (addUppercase === true)) {
    for(i=0; i<charLength; i++) {
      let character = Math.floor(Math.random() *uppercase.length);
      newPassword +=uppercase.charAt(character, character+1);
    }
  }
  


    //Generate new password into text slot
  generatePassword.textContent = newPassword;

}

})




  
  
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
