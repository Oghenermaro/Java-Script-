let friuts = ["apple", "pear", "orange", "mango" ];
console.log(friuts);

for(let i = 0; i < 4 ; i++){
    console.log(friuts[i])
}

age =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mutipleOfThree = (array) => {
    for(i = 0; i < 13; i++) {
        if (array[i] % 3 === 0) {
            console.log(array[i]);
        }
    }
}

mutipleOfThree(age)