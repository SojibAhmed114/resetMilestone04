//for loop  odd even
for(let i = 0; i < 10; i++){
    // console.log(i);
}

// get even number using for loop
for( let i = 0 ; i <= 20; i = i + 2){
    console.log(i);
}

//get even number using for loop
let sums = 0;
for (let i = 0; i <= 20; i++){
    sums = sums + i;
}
console.log('for loop sum', sums);

//recap 20 sum using while loop
let mark = 1;
let sum = 0;
while (mark <= 20){
    sum = sum +mark;
    mark++;
}
console.log('total sum:', sum);