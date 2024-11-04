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