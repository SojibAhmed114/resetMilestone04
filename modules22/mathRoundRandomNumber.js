// math method
const minNumber = Math.min(14,25,69,58,74,51,21,15,898);
console.log(minNumber);
const maxNumbers = Math.max(14,25,69,58,74,51,21,15,898);
console.log(maxNumbers);


// Math.round
// The Math.round() method rounds a number to the nearest integer.
//2.49 will be rounded down (2), and 2.5 will be rounded up (3).
console.log(Math.round(2.1)); // output: 2
console.log(Math.round(2.5)); // output: 3

// Math.floor
// The Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.floor(1.9)); // output: 1

//Math.ceil
//The Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log(Math.ceil(1.1)); //output: 2

// Math.random 
// The Math.random() method returns a random floating point number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random()* 10);
const rand = Math.round(Math.random()* 10);
console.log(rand);