const products = [
    {name:'shampo', price: 300, quantity: 5},
    {name:'shart', price: 1000, quantity: 12},
    {name:'shamp', price: 700, quantity: 3},
    {name:'shampo', price: 1300, quantity: 4},
    {name:'shampo', price: 3000, quantity: 2},
]

function cardTotal(products) {
    let total = 0;
    for (const product of products){
        const productCost = product.price * product.quantity;
        total += productCost;
    }
    return total;
}

console.log(cardTotal(products));