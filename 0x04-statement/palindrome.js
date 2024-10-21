let n = 20;
let factorial = 1;

for(i = n; i >= 1; i--){
  console.log(i);
    console.log(`factorial is now ${factorial} * ${i}`);
    factorial *= i;
    console.log(factorial)
}
