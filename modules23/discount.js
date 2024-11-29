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
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 80;

    if (Quantity <= 100) {
        const total = Quantity * first100Price;
        return total;
    }
    else if (Quantity <= 200){
        const first100TotalPrice = 100 * first100Price;
        const remainingQuantity = Quantity - 100;
        const remainingTotalPrice = remainingQuantity * second100Price;
        const total = remainingTotalPrice + first100TotalPrice;
        return total;
    }
    else {
        const first100PriceTotal = first100Price * 100;
        const second100TotalPrice = second100Price * 100;
        const remainingQuantity = Quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = remainingTotal +  first100PriceTotal + second100TotalPrice;
        return total;
    }
}
console.log(layeredDiscount(201));