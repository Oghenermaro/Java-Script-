let num1 = 0;
let num2 = 1;
let limit = 10;

for (let i = 1; i <= limit; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum
}