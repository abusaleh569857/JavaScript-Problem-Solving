const a = [1, 2, 3];
const b = [1, 2, 3];
const c = "1,2,3";

console.log(a == b); // false because 2 array check reference 
console.log(a == c); // true because array a convert into string 