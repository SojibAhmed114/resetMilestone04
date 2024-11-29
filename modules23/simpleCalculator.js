// simple calculator

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiple(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

function calculator(x, y, calculation) {
    if (calculation === 'add') {
        const result = add(x, y);
        return result;
    }
    else if (calculation === 'subtract') {
        const result = subtract(x, y);
        return result;
    }
    else if (calculation === 'multiple') {
        return multiple(x, y);
    }
    else if (calculation === "division") {
        return division(x,y);
    }
    else{
        return 'bokacoda';
    }
}

console.log(calculator(4,4, 'multiple'));