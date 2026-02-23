function processArray(arr) {
 
  let uniqueNumbers = [...new Set(arr)];

  
  let evenNumbers = uniqueNumbers.filter(num => num % 2 === 0);

 
  let sumOfEven = evenNumbers.reduce((sum, num) => sum + num, 0);

  return {
    uniqueNumbers,
    evenNumbers,
    sumOfEven
  };
}

console.log(processArray([1, 2, 2, 3, 4, 5, 6, 6, 8]));