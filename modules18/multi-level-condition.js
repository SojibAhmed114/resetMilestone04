let money = 3000;

if (money >= 5000){
    const discount = money * 10 / 100;
    const discountPrice = money - discount
    console.log(discountPrice);
    
}

else if (money >= 3000){
    const discount = money * 10 / 100;
    const discountPrice = money - discount;
    console.log(discountPrice);
}

else {
    console.log(money);
    
}

// more js 

let age = 11;
let price = 500;

if (age <= 12){
    console.log('you can buy food for me because you are a child');
}

else if (age >= 60){
    // 50% discount 
    const discount = price *50/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}