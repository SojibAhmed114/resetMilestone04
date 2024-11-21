

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