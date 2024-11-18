// task One
function multi (numOne, numTwo, numThree, numFour){
    const multiple = numOne * numTwo * numThree * numFour;
    return multiple;
}


const mul = multi(14,25,36,458);
console.log(mul);

// task Two 
function double (number){
    if(number % 2 === 0){
        const results = number * 2;
        return results;
    }
    else {
        const results = number * 3;
        return results;
    }
}

let nums = double (3);
console.log('hi',nums);