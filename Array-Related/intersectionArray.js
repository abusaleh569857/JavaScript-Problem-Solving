//find the intersection of two arrays

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = arr1.filter((item) => arr2.includes(item));
console.log(intersection);
