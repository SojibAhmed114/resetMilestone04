//------------task one---------- 
const colors = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    'golden rod': '#daa520'
}
let outPutOne = colors['golden rod'];
console.log(outPutOne); //#daa520

//--------task Two----------
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}
car['passenger capacity'] = 5;
console.log(car); //

//-----------------task Three-----------------
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
}

let output = student['physics'].marks
console.log(output); //30


//-----------task four----------
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const count = Object.keys(students).length
console.log(count); // 4


//------------task Five------------
//Loop through an object and print the key-value pairs with their types
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (const dataName in myObject){
    console.log('Keys',dataName, "|",'type:', typeof(myObject[dataName]));
}