let sentence = "i am learning web dev";

let reverseThree = sentence.split("").reverse().join('')
console.log( reverseThree);
// output: ved bew gninrael ma i

// using for of loop 
let reverse = "";
for (let letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);

// using for loop 
let reverseTwo = "";
for (let i = 0; i < sentence.length; i++){
    reverseTwo = sentence[i] + reverseTwo;
}
console.log(reverseTwo);


