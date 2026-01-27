/* 
Given this array:
let marks = [45, 78, 90, 33, 60, 85];
Print the numbers greater than 50
*/

let marks = [45, 78, 90, 33, 60, 85];

for (const mark of marks) {
    if (mark > 50) {
        console.log(mark);
    }
}