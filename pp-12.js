// Reverse a string...

let str = 'hello';
let reverse = '';

for (const letter of str) {
    reverse = letter + reverse;
}

console.log(reverse);