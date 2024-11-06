// task One
let fruits = ['Apple', 'Papaya', 'Grapefruit', 'Jackfruit', 'mango'];

// find 3rd index element 
let rd = fruits[3];
console.log(rd);

// change 2nd index element to jambura
fruits[2]= 'jambura';
console.log(fruits);


//task Two
let place = ['Dhaka', 'Gaibandha', 'Cox Bazar'];
place.push('Pabna');
place.push('Bogra', 'RAjshahi');
place.pop();
console.log(place);


//task Three
let bookName = ['bangal', 'english', 'mathematics'];
let chkekBook = bookName.includes('javascript');
console.log(chkekBook);

//task Four 
let money = [];
let moneyTwo =[14,15,26,36];
var pots = 'hi';
console.log(Array.isArray(money));
console.log(Array.isArray(moneyTwo));
console.log(Array.isArray(pots));


// task Five 
let country1 = ['bangladesh', 'India', 'china'];
let country2 = ['USA', 'saudi arabia', ];
let country = country1.concat(country2);
console.log(country);
