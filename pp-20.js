// Check whether a string contains all the vowels a, e, i, o, u.

const vowels = ["a", "e", "i", "o", "u"];
const str1 = "education";
let isContainAllVowels = true;
// const str1 = "rhythm";

for (const ch of vowels) {
    if (!str1.includes(ch)) {
        isContainAllVowels = false;
        break;
    }
}

console.log(isContainAllVowels);

// Using every();
const result = vowels.every(ch => str1.includes(ch));
console.log(result);