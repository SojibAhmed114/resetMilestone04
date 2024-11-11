const num =[1,2,3,4,5,6,7];
num.reverse()
console.log(num);

//---------------
const numba = [11,22,33,44,55,66,77,88,99];

const reversArray = [];
for (const numb of numba){
    reversArray.unshift(numb);
}
console.log(reversArray);

//--------
const numbers = [111,222,333,444,555,666];

const addReversArry =[];
for (i=0; i< numbers.length; i++){
    let getNum = numbers[i];
    addReversArry.unshift(getNum)
}
console.log(addReversArry);

// looping revers side
const setReversArray =[];
const myArray = [100,200,300,400,500,600,700,800,900];
for (let x = myArray.length -1; x > 0; x-- ){
    console.log(x);
    setReversArray.push(myArray[x])
}
console.log(setReversArray);