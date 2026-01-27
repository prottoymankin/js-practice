/* Given this array:
let scores = [10, 25, 40, 55, 70];
Find the sum of all elements
*/

let scores = [10, 25, 40, 55, 70];
let sum = 0;

for (const score of scores) {
    sum += score;
}

console.log(sum);