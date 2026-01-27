/* Given this array
let numbers = [45, 12, 78, 5, 33, 90];
Find the smallest number in this array using a loop
*/

let numbers = [45, 12, 78, 5, 33, 90];
let smallestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (smallestNumber > numbers[i]) {
        smallestNumber = numbers[i];
    }
}

console.log(smallestNumber);