// Capitalize Every first Letter of each word in a String.
const str = "i will become a developer";
const strArray = str.split(" ");

for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1); 
}

let updatedStr = strArray.join(" ");
console.log(updatedStr);