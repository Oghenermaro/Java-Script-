let fruits = ["apple", "orange", "tpricot", "elderberry", "avocado", "olive",]

function startWithAVowel(item) {
    if (item[0] === 'a' || item[0] === 'e' || item[0] === 'i' || item[0] === 'o' || item[0] === 'u')
     return true
}

vowelArray = fruits.filter((friut) => {
    vowel = startWithAVowel(friut);
    if(vowel) {
        return friut;
    }
})

console.log(vowelArray)