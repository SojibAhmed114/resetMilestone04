//? while loop 
let num = 10;
while (num < 15){
    console.log(num);
    num++;
}


//? sum 1 to 10;

let numbers = 1;
let total = 0;

while (numbers <= 10){
    total =total + numbers;
    console.log('sum:', total);
    numbers++;
}


//? get even numbers 
let mark = 1;
while (mark <= 20){
    if (mark % 2 === 0){
        console.log('even number',mark);
    }
    mark++;
}