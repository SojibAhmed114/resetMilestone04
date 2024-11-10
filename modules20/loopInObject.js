const mobile ={
    brand: 'apple',
    price: 20000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

for (const data in mobile){
    console.log(mobile[data]);
}
//output: apple
// 20000
// black
// 12mp 
// true 

//-----------------
let getData = Object.keys(mobile)
for (const Obdata of getData){
    console.log(mobile[Obdata]);
}