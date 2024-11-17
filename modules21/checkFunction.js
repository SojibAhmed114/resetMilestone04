function evenSizeCheck (str){
   const size = str.length;
   if (size % 2 !== 1){
        return true;
   }
   else{
    return false;
   }

}
const checkSize = evenSizeCheck("dhaka");
console.log(checkSize);


//---------------------

function doDouble (number, checkValues){
    if (checkValues){
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}   

const setNumber = doDouble(2, true)
console.log(setNumber);