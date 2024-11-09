//uppercase 
let caseONe = 'my name is sojib ahmed safi';
console.log(caseONe.toUpperCase()); //MY  NAME IS SOJIB AHMED SAFI

//lowercase 
let caseTwo = 'WHAT IS YOUR NAME';
console.log(caseTwo.toLowerCase());  //what is your name

//example
let password = "SojiB";
let conformPassword = 'sOjiB';
if (password.toLowerCase() === conformPassword.toLowerCase()) {
    console.log('log in successful');
}
else {
    console.log('please try again');
}

// trim 
const codeOne = "  1245";
const codeTwo = "  1245   ";

if (codeOne.trim() === codeTwo.trim()) {
    console.log('vote nai');
}
else {
    console.log('vote ache bahe');
}