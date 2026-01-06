//flatten a nested array into a single flat array

const arr = [1, [2, 3], [4, [5, 6]]];
const flatArr = arr.flat(Infinity);
console.log(flatArr);
