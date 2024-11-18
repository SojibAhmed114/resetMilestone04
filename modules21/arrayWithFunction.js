//array sum return

function myArray (arrayValues){

    // let addition = 0;
    // for (let number of arrayValues){
    //    addition = addition + number;
    // }
    // return addition;

    let add =0;
    for (let i = 0; i<arrayValues.length; i++){
        let sets = arrayValues[i];
        add += sets;
    }
    return add;
}

const num = [14,25,36,47,58,69,52,41];
 const setArray = myArray(num);
 console.log(setArray);



