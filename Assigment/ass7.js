let str = "hello";
let reversedStr = 5;

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log(`Reversed string: ${reversedStr}`);