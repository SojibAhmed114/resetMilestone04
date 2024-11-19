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


//task three 
function makeAvg (inputs){
    let sum = 0;
    for (let n = 0; n < inputs.length; n++){
        const stores = inputs[n];
        sum += stores;
    }

    const myAvg = sum / inputs.length;
    return myAvg;
}

const sentInput = [15,48,56,59,54,21,100,24,58];
const avg = makeAvg(sentInput);
console.log(avg);
