/* ternary operator three part 
*   ?      :
*  condition ? do something when true : do something when false
*/

let price = 100;
const isLeader = false;

// ternary condition
// isLeader === true ? price = 0 : price += 1000;
// same ternary condition different system 
price = isLeader === true ? 0 : + 100000000;

console.log(price);



//semi advance ternary condition
//jodi car thake tahole 2 gun nibo r na thakle half nibo, other der same
let money = 5000;
let isCar = true;

money = isCar === true ? money > 1000 ? money * 2 : money <= 500 ? money / 2 : money : money;


console.log(money);

