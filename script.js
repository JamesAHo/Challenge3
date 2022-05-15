// the length of the password will be at  least 8 characters and no more than 128 characters
// Assignment code here
// make characters arrays including: numberic, special characters, uppercase and lowercase.
var numberic = ['0','1','2',"3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// make variables that user can choose the length abnd characters in their password.
var chooselength = '';
var chooseSpecialcharacter = '';
var chooseUppercase = '';
var chooseLowercase = '';
var choosenumeric = '';




// add promt when click password generate.
// add an eventlistener to prompt confirmation.
document.querySelector('#generate').addEventListener('click', writePassword);
function generatePassword() {
  // validate input is number


  var chooselength = (prompt('Please enter the number of characters of your password! '));
  // create function that if user choose less than 8 or more than 128 characters.
  // run a loop to check on the length interval.
  while(chooselength <= 7 || chooselength >= 129) {
    alert('Please try again ! input should be at least 8 or no more than 128 characters')
    var chooselength = (prompt('Please enter the number of characters of your password! '));
  } 
  
  
  
    alert(`Your password contain ${chooselength} characters!`);
   
  

  
  
  
  
  // confirming all charcaters
  var chooseUppercase = confirm('Click Ok to add uppercase letters');
  var chooseLowercase = confirm('Click Ok to add lowercase letters');
  var chooseSpecialcharacter = confirm(' Click Ok to add special characters');
  var choosenumeric = confirm('Click Ok to add numeric numbers');
  // Create function to make sure user input is valid
  while(chooseLowercase === false && chooseSpecialcharacter === false 
    && chooseUppercase === false && choosenumeric === false) {
    alert('Please choose at least one');
  var chooseUppercase = confirm(' Click Ok to add uppercase letters');
  var chooseLowercase = confirm('Click Ok to add lowercase letters');
  var chooseSpecialcharacter = confirm(' Click Ok to add special characters');
  var choosenumeric = confirm(' Click Ok to add numeric numbers');
  }
  // using concat to merge arrays 
  var passwordChar = [] 
  if(chooseLowercase) {
    passwordChar = passwordChar.concat(lowercaseCharacter)
  }
  if(chooseSpecialcharacter) {
    passwordChar = passwordChar.concat(specialCharacter)
  }
  if(chooseUppercase) {
    passwordChar = passwordChar.concat(uppercaseCharacter)
  }
  if(choosenumeric) {
    passwordChar = passwordChar.concat(numberic)
  }
  // check to see password, the console.log gives all the arrays of characters
  console.log(passwordChar)

  // generating random password
  var randomPass = "";
  for (var i=0; i <chooselength; i++) {
    randomPass = randomPass + passwordChar[Math.floor(Math.random()* passwordChar.length)];
    console.log(randomPass)
  }
  return randomPass;


}






// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



