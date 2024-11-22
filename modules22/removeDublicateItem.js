

function noDouble(ary) {
    const unique = [];
    for (const items of ary){
        if (unique.includes(items) === false) {
            unique.push(items);
        }
    }
    return unique;
}


const chorName = ['safi', 'sojib', 'sakil', 'ripon', 'rima', 'jakiya', 'fatema', 'safi', 'sojib', 'sakil', 'fatema'];
const result = noDouble(chorName);
console.log(result);



//--------------------------------

function removeDoubleName (names){

    const checkNames = [];
    for (const name of names){
        if (checkNames.includes(name) === false) {
            checkNames.push(name);
        }
    }
    return checkNames;
}


const namesArray = ['sabiha', 'sabina', 'sabiha', 'sabina', 'jarifa', 'jarifa', 'sinthia', 'sinthia'];
const resultTwo = removeDoubleName(namesArray);
console.log(resultTwo);