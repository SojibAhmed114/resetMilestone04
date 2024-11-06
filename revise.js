
let arrayLen = [14,15,15,15,2 , 'sojib',5,14];
console.log(arrayLen.length);

console.log(arrayLen.indexOf('sojib'));

console.log(arrayLen[5]);

let updateArray = arrayLen[5] = 'safi';
console.log(updateArray);
console.log(arrayLen);


arrayLen.push(5000);
arrayLen.unshift('sakil')
console.log(arrayLen);


console.log(Array.isArray(arrayLen));




