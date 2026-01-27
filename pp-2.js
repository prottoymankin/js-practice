/*
Given this array:
let nums = [3, 10, 25, 8, 15, 6];
👉 Print only the even numbers
*/

let nums = [3, 10, 25, 8, 15, 6];

for (const num of nums) {
    if (num % 2 === 0) {
        console.log(num);
    }
}