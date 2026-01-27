/*
Given this array:
let prices = [120, 80, 200, 50, 300];
Find the largest number using a loop
*/

let prices = [120, 80, 200, 50, 300];
let largestNumber = prices[0];

for (let i = 1; i < prices.length; i++) {
    if (largestNumber < prices[i]) {
        largestNumber = prices[i];
    }
}

console.log(largestNumber);