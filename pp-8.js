/*
Given this array:
let values = [2, 5, 8, 11, 14, 17];
Count how many even numbers are in the array
*/

let values = [2, 5, 8, 11, 14, 17];
let evenCount = 0;

for (const value of values) {
    if (value % 2 === 0) {
        evenCount++;
    }
}

console.log(evenCount);