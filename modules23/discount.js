/*
0 to 100 = 100 tk
101 to 200 = 90 tk
201 to unlimited = 80 tk
*/

function discountedPrice(quantity) {
    if (quantity <= 100 ) {
        const total  = quantity * 100;
        return total;
    }
    else if (quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 80;
        return total;
    }
}

console.log(discountedPrice(201));

//layered Discount
function layeredDiscount(Quantity) {
    
}