//Count how many times a string has the letter a.

const str = "banana";
let count = 0;

for (const letter of str) {
    if (letter === "a") {
        count++;
    }
}

console.log(count);