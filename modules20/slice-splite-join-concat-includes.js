// slice:
// let myName = 'sojibAhmed';
// console.log(myName.slice(2,5)); //jib

// split 
// const sentence = "i live in bangladesh he his a lie";
// console.log(sentence.split(' ')); //[ 'i', 'live', 'in', 'bangladesh', 'he', 'his', 'a', 'lie' ]
// const friendStr = 'sojib,ahmed,safi,sakil,sabina,sinthia';
// const friend = friendStr.split(',');
// console.log(friend); //[ 'sojib', 'ahmed', 'safi', 'sakil', 'sabina', 'sinthia' ]


//slice 

let towName = "sojibAhemdSafi";
console.log(towName.slice(4,7));



//split
let friendNameStr = "karun,amolgir,himel,joy,rakibul";
let friendName = friendNameStr.split(",");
console.log(friendName);


//string concat
const firstName = 'sojib';
const lastName = 'ahemd';
let totalName = firstName.concat(" ").concat(lastName);
console.log(totalName); //sojib ahmed