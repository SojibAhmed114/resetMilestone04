function even (getData){
    let getOnlyEven = [];
    for ( const data of getData){
        if (data % 2 === 0){
            getOnlyEven.push(data);
        }
    }
    return getOnlyEven;
}

const myArray = [14,25,68,59,47,58,69,74,99,13,15];

const result = even(myArray);
console.log(result);