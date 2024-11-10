let schoolData = {
    studentsName: 'sojib',
    Roll : 12,
    class : 9,
    parent_Info: {
        fatherName: 'abdus salam',
        motherName: 'jazifa begum'
    },
    subject : ['bangal', 'english', 'mathematics']
}

//simple get data and set data using dot notation and bracket notation
let getOne = schoolData.Roll
let getTwo = schoolData['parent_Info']
console.log("getOne: ", getOne);
console.log(getTwo);


//simple set or update data using dot notation and bracket notation
let setOne = schoolData.Roll = 100
let setTwo = schoolData['parent_Info']
console.log("setOne: ", setOne);
console.log(setTwo);

