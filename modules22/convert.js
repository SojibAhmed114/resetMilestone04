// 12 inch 1 feet

function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}

const shovoHeight = 52;
const  result = inchToFeet(shovoHeight);
console.log(result);

// input inch ,show output ex: 5 feet 3 inch

function inchToFeet2(inch){
    const feetTwo = inch / 12;
    const feetNumber = parseInt(feetTwo);

    const inchRemainder = inch % 12;
    
    const resultTwo = feetNumber + ' feet ' + inchRemainder + ' inch';
    return resultTwo;
}

const height = inchToFeet2(52);
console.log(height);