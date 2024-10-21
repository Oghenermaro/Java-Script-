//Sum of oddNumber
let n = 10;

if (n <= 0) {
    console.log(`The number must be a positive number`)
}

let number = 1;

while (number <= 9 ) {
    console.log(number)
    number+=2;
}

let toltalSum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0);
}

console.log(`The sum of all odd numbers from 1 to ${n} is: ${toltalSum}`)


//sum of evenNumber
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    sum += 1;
  }
}
console.log("sum of even numbers from 1 to " + n + " :" + sum)