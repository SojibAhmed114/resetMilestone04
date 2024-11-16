//function structure
// function functionName (paraMeter){}

function myFunction (){
    console.log('log in kor be');
}

myFunction();


//square 

function square (Number){
    const result = Number * Number;
    const resultTwo = Number ** 2;

    console.log("result: ", result);
    console.log(resultTwo);

}
square(2);

// addition
function add (numOne, numTwo){
    const addition =numOne + numTwo;
    console.log(addition);
}
add(10,10);


// some thing
function jora (typeOne){
    const joras = typeOne * 2;
    console.log(joras);
}

const inputs = 20;
jora(inputs); 


//different
function diff (fatherAge , sonAge){
    const age = fatherAge - sonAge;
    console.log(age);
}
const faAge = 10;
const soAge = 8;
diff(faAge, soAge);


// return
function outputReturn (paraMeterOne){
    const checks = paraMeterOne + 10;
    return checks;
}

outputReturn(10);


//full function with using return

function price (valuesOne, valuesTwo){
    const sum = valuesOne + valuesTwo;
    return sum / 2;
}

const myResult = price(20,50);
console.log(myResult);