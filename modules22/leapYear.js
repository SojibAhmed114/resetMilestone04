// check leap year with simple system

function isLeapYear (year){
    if (year % 4 === 0){
        return true;
    }
    return false;
}

const checkYear = isLeapYear(2052);
console.log(checkYear);


// check leap year with mid label system

function checkLeapYear(year){
    if (year % 100 !== 0 && year % 4 ===0) {
        return 'Leap year';
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return "Leap year";
    }
    return 'not leap year';
}

const isLipi = checkLeapYear(1900);
console.log(isLipi);