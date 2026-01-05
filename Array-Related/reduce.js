let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initialValue = 0;
const sumNum = (acc, itemVal) => {
  let result = acc + itemVal;
  return result;
};

const result = num.reduce(sumNum, initialValue);
console.log("Result :", result);

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = num2.reduce((acc, itemVal) => acc + itemVal, 15);
console.log("Result 2:", result2);
