let bottle = {
    brand : 'apple',
    price : 125,
    liter : 1,
    subject: ['bangal', 'englis', 'math'],
    'date daily':{
        dateOne: '14/12/24',
        dateTwo: '45,26,2024'
    }
}

//create object using keyword
const createObj = new Object();
createObj.fatherName ='abdus salmam';
createObj.motherName = 'jarifa begum';
console.log(createObj);
//-----------------

// object properties access system 
// dot notation: variableName + dot + propertiesName [ata kom use kora hobe karon onek somoy access pauya jay na]
console.log(bottle.brand);

//bracket notation : variableName + ['propertiesName'] 
console.log(bottle['price']);


// set or update object properties values
// dot notation:
bottle.brand = 'Banana';
bottle['price'] = 500;
console.log(bottle);

let updateValues = 'liter';
bottle['liter'] = 20;
console.log(bottle.liter);