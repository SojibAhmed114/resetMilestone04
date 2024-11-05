//task One
let burgerPrice = 500;
if (burgerPrice > 500){
    console.log('hey you win a Coke');
}
else {
    console.log('please pay 30 tk for coke');
}

// task two 
let weight = 29;

if (weight < 18.5){
    console.log('you are underweight.');
}

else {
    if (weight >= 18.5 || weight <= 24.9){
        console.log('you are normal.');
    }
    else {
        if (weight >= 25 || weight <=29.9){
            console.log('you are overweight.');
        }
        else{
            console.log('are you very motu');
        }
    }
}