// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var nLabel = document.createElement("h3") 
nLabel.innerText="how many characters do you want your password to be? must be between 8 and 128 characters"

document.body.appendChild(nLabel)

//document.body.appendChild(uCLabel)
//document.body.appendChild(nCLabel)
//document.body.appendChild(sCLabel)
  var n 
  var lC 
  var uC 
  var nC 
  var sC 
  //var password = generatePassword(lC,uC,nC,sC,n );
  var numberInput = document.createElement("input")
  numberInput.id= "n"
  numberInput.type="number"

  document.body.appendChild(numberInput)

  var button = document.createElement("button")
  button.innerHTML = "next"
button.addEventListener("click",next)
  document.body.appendChild(button)
function next(){
  if (parseInt(numberInput.value)<8 || parseInt(numberInput.vlue)>128)
  {window.alert("Invalid input, press generate password button again")


  }
  else {
 n = parseInt(numberInput.value)
var lowerCaseYes = document.createElement("button")
var lCLabel = document.createElement("h3")
var lowerCaseNo = document.createElement("button")
 lowerCaseYes.innerHTML = "yes"
 lowerCaseNo.innerHTML = "no"

lCLabel.innerText="do you want lower case letters"

document.body.appendChild(lCLabel)
document.body.appendChild(lowerCaseYes)
document.body.appendChild(lowerCaseNo)
lowerCaseYes.addEventListener("click",next1)

lowerCaseNo.addEventListener("click", next1)
function next1(event)
{
if (event.target.innerHTML==="yes") {
  lC= true
  
        }
else lC=false
console.log(lowerCaseNo.innerHTML)
var upperCaseYes = document.createElement("button")
var uCLabel = document.createElement("h3")
var upperCaseNo = document.createElement("button")
 upperCaseYes.innerHTML = "yes"
 upperCaseNo.innerHTML = "no"

uCLabel.innerText="do you want uppercase letters"

document.body.appendChild(uCLabel)
document.body.appendChild(upperCaseYes)
document.body.appendChild(upperCaseNo)
upperCaseYes.addEventListener("click",next2)

upperCaseNo.addEventListener("click", next2)
function next2(event){
if (event.target.innerHTML==="yes") {
  uC= true
  
}
else uC=false


var specialCharactersYes = document.createElement("button")
var sCLabel = document.createElement("h3")
var specialCharactersNo = document.createElement("button")
specialCharactersYes.innerHTML = "yes"
specialCharactersNo.innerHTML = "no"

sCLabel.innerText="do you want special Characters"

document.body.appendChild(sCLabel)
document.body.appendChild(specialCharactersYes)
document.body.appendChild(specialCharactersNo)
specialCharactersYes.addEventListener("click",next3)

specialCharactersNo.addEventListener("click", next3)
function next3(event){
if (event.target.innerHTML==="yes") {
  sC =true
  
}
else sC=false


var numCharactersYes = document.createElement("button")
var nCLabel = document.createElement("h3")
var numCharactersNo = document.createElement("button")
numCharactersYes.innerHTML = "yes"
numCharactersNo.innerHTML = "NO"

nCLabel.innerText="do you want numbers"

document.body.appendChild(nCLabel)
document.body.appendChild(numCharactersYes)
document.body.appendChild(numCharactersNo)
numCharactersYes.addEventListener("click",next4)

numCharactersNo.addEventListener("click", next4)
function next4(event){
if (event.target.innerHTML==="yes") {
  nC= true
  
}
else nC=false
var password = generatePassword(lC, uC, nC, sC, n)
window.alert(password)
}
}

}

}
}


}

 //var passwordText = document.querySelector("#password");

 //passwordText.value = password;

}

 //Add event listener to generate button


 generateBtn.addEventListener("click", writePassword);
 window.alert(password)

function generatePassword (lC, uC, nC, sC, n){
var i = 0
var lowerCaseLetters = ["q","w","e","r","t","y","u","i","o","p", "a","s", "d", "f", "g","h","j","k","l","z","x","c","v","b","n","m" ];
var upperCaseLetters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","V","B","N","M"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","}","]","|",":","<",",",">",".","/","?"];
var numCharacters = ["1","2","3","4","6","7","8","9","0"];
var splicedArray = [];
var passwordArray = [] ;
if (lC === true) {
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1) + min); }
  var ele =getRandomInt(0,lowerCaseLetters.length-1)
  passwordArray.push (lowerCaseLetters[ele]); 
splicedArray = splicedArray.concat(lowerCaseLetters)
i = i+1

}
if (uC === true){
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1) + min); }
    var ele = getRandomInt(0,upperCaseLetters.length-1)
    passwordArray.push(upperCaseLetters[ele]); 
splicedArray = splicedArray.concat(upperCaseLetters)
i = i+1
}
if (sC === true){
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1) + min); }
    var ele = getRandomInt(0,specialCharacters.length-1) 
    passwordArray.push(specialCharacters[ele]); 
splicedArray = splicedArray.concat(specialCharacters)
i = i+1
}



if (nC === true) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1) + min); }
    var ele = getRandomInt(0,numCharacters.length-1) 
    passwordArray.push(numCharacters[ele]); 
  splicedArray = splicedArray.concat(numCharacters)
i = i+1
}
var m = 0
for ( let m = 0; m<(n - i); m = m + 1   ){
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1) + min); }
    var ele = getRandomInt(0,splicedArray.length-1) 
    passwordArray.push(splicedArray[ele]);
            

}
let text1 = passwordArray.join("")
return text1 }
