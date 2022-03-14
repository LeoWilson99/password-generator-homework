//sets all the characters that can be shown on the password generator, split up for options

const alpha = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//takes the ID from the HTML so we can use it in the code

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const incUppercase = document.getElementById("uppercase")
const generateBtn = document.getElementById("generate");


//event listener to check the options and call the generatePassword function once clicked.

generateBtn.addEventListener("click", () => {
  let characters = alpha;
  incUppercase.checked ? (characters += upper) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});



//does the actual generating, not crypto secure tho :(


const generatePassword = (length, characters) => {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt( Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};