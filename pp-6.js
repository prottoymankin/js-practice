/*
Given this array:
let prices = [120, 80, 200, 50, 300];
Find the largest number using a loop
*/

let prices = [120, 80, 200, 50, 300];
let largestNumber = prices[0];

for (const price of prices) {
    if (largestNumber < price) {
        largestNumber = price;
    }
}

console.log(largestNumber);