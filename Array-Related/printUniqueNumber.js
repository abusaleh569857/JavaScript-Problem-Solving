let numArray = [1, 2, 4, 2, 4, 7, 9, 2, 3, 5, 7, 8, 3, 4];
let uniqueNumber = [...new Set(numArray)];
console.log("Original Number :", numArray);
console.log("Unique Number :", uniqueNumber);

let nameArray = ["Maruf", "Mahim", "Shakil", "Rakib", "Maruf", "Mahim"];
let uniqueName = [...new Set(nameArray)];
console.log("Original Name Array :", nameArray);
console.log("Unique Name Array :", uniqueName);
