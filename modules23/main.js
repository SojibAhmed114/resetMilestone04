//get max number in array 

const num = [45,46,47,48,49,50,60,51,52,53];

function getMaxInArray(numbers) {
    let getMax = numbers[0];
    for (let number of numbers){
        if (number > getMax){
            getMax = number
        }
    }
    return getMax;
}
const gets = getMaxInArray(num);
console.log(gets);


// get min number in array 
const  phonePrice = [14000, 20000, 30000, 10000, 50000, 5000];

function getMin (getPrice){
    let findMin = getPrice[0];
    for (const price of getPrice){
        if (price < findMin) {
            findMin = price;
        }
    }
    return findMin;
}
console.log(getMin(phonePrice));


// get min number in object
const MobilePrice = [
    {name:"samsung", price: 20000, camera: "12MP", location: "Dhaka"},
    {name:"samsung", price: 25000, camera: "12MP", location: "Pabna"},
    {name:"samsung", price: 30000, camera: "12MP", location: "cox bazar"},
    {name:"samsung", price: 31000, camera: "12MP", location: "rajshahi"},
    {name:"samsung", price: 40000, camera: "12MP", location: "Dhaka"},
    {name:"samsung", price: 15000, camera: "12MP", location: "bogura"}
]
function getMinInObject (mobiles){
   let min = mobiles[0];
   for (const mobile of mobiles){
        if (mobile.price < min.price){
            min = mobile;
        }
   }
   return min;
}
console.log(getMinInObject(MobilePrice));

// total wood

function findWood(chairQuantity, betQuantity, tableQuantity) {
    const chairCFT = 3;
    const betCFT = 50;
    const tableCFT = 30;

    const chairTotalWood = chairQuantity * chairCFT;
    const betTotalWood = betQuantity * betCFT;
    const tableTotalWood = tableQuantity * tableCFT;

    const totalWood = chairTotalWood + betTotalWood + tableTotalWood;

    return totalWood;
}
console.log(findWood(1,1,2));