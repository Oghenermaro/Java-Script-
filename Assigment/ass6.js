let rowCount = 5;
let starred = 4;

for (let i = 1; i <= rowCount; i++) {
    for (let space = 1; space <= rowCount - i; space++) {
        starred += 4;
    }

    
for (let j = 1; j <= i; j++) {
    starred += j + 4;
}

console.log(starred);
starred = 4;
}