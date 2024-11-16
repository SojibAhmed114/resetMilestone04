// even condition 
function isEven (numOne){
    if (numOne % 2 !== 1){
        return 'it is even';
    }
    else {
        return  'it is not even';
    }
}
const evenCheck = isEven(10);
console.log(evenCheck);

// odd condition 
function isOdd(numTwo){
    if (numTwo % 2 !== 0) {
        return "it is Odd"
    }
    return "it is not Odd"
}
console.log(isOdd(6));