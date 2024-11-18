//return only even number
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




//return only even number total sum



function evenNumber(setData){
    let sum = 0;
    for (let i = 0; i < setData.length; i++){
        const singleData = setData[i];
        if (singleData % 2 === 0){
            sum += singleData;
        }
    }
    return sum;
}

const arrays = [14,15,16,17,18,19,20,21,12,23,24,99,77,55,100];
const resultTwo = evenNumber(arrays);
console.log('total even sum',resultTwo);