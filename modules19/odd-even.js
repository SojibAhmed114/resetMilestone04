//add number
// system one 
// for (let i =0; i <= 20; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 20; i++){
//     if (i % 2 !== 1){
//     console.log(i);
//     }
// }


// 5 diye vag jay 

// for (let i = 0; i <= 30; i++){
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// give me the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for (let x = 0; x<=20; x++){
    if (x % 3 === 0){
        sum += x;
    }
}
console.log('total number using', sum);

let n = 0;
let totalSum = 0;
while (n <= 20){
    if (n % 2 === 0){
        totalSum += n;
    }
    n++;
}
console.log('totamSum:', totalSum);