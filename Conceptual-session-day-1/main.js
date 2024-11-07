//? The exponentiation (**) operator returns the result of raising the first operand to the power of the second operand. 

let toThePower = 5;
let PowerResult = toThePower ** 2;
console.log(PowerResult);


//? modulas 

let myModu = 10;
let moduResult = myModu % 3;
console.log("moduResult: ", moduResult);


//-------------------------------------------
let adds = 40;
adds += 10;
console.log("adds: ", adds);

//? isNaN()
//! not number , and can not be transformed into number = true
//! number or can be transformed into number = false

let checkValur = '45.69';
console.log(isNaN(checkValur));


// -----------------------------
let isRaining = false;

if (!isRaining){
    console.log('i can not go');
}
else {
    console.log('i can go');
}