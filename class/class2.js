function additionOfNumbers(num1, num2, num3, num4) {
    let firstAddition = num2 + num3;

    console.log(firstAddition);

    let secondAddition = num1 + num4;

    return secondAddition;
}

let a = 5;
let b = 10;
let c = 6;
let d = 8;

let addition = additionOfNumbers(a, b, c, d)

console.log(`The addition of ${a} and ${d} is ${addition}`)