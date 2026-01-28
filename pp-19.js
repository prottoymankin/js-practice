// Count how many times a string has the letter a or A.

const str = "A man is A man";
let count = 0;

for (const letter of str) {
    if (letter.toLowerCase() === "a") {
        count++;
    }
}

console.log(count);