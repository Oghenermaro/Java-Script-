function userName(name) {
    console.log(`my name is ${name}`)
}

userName("maro")

userName("john")

userName("dennis")

function greaterThenTen(number) {
    if(number > 10) {
        console.log(`${number} is greater than 10`);
    } else {
        console.log(`${number} is less than 10`);
    }
}

greaterThenTen(4)

greaterThenTen(20)


function printout(number) {
    if(number < 0) {
        console.log(`number is invalid`);
    } else {
        for(let i = number ; i >= 0 ; i--)
        console.log(i)
    }
}

printout(10)

function addNumber(num1, num2) {
    let addition = num1 + num2;

    return addition;
}

let num1 = 3;
let num2 = 14;

let add = addNumber(num1, num2);

console.log(`addition of ${num1} and ${num2} is ${add}`)