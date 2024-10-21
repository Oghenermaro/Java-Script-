const add = (a, b) => {
    return a + b;
}

console.log(add(1, 5))



const multipicationTable = (num, end) => {
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= end; j +=5) {
            
            let multipicationTable = j;

            let answer = j * i;
            console.log(`${i} * ${j} = ${answer}`)
        }
    }
}

multipicationTable(5, 51)