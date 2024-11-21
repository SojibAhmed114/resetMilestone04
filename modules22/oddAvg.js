// get odd number average in array

function isOdd (numbers){
    let oddSum = 0;
    const oddArray = [];
    for (let number of numbers ){
       if (number % 2 === 1) {
            oddArray.push(number);
            oddSum += number;
       }
    }
    
    const count  = oddArray.length;
    const totalAvg = oddSum / count;
    return totalAvg;
}
const sentArray = [42, 13, 58, 65, 81, 96, 7, 5];
const avg = isOdd(sentArray)
console.log(avg);