//function that swaps the first two elements in a given array

function swapFirstTwo([first, second, ...rest]) {
  return [second, first, ...rest];
}

const array = [3, 5, 1, 4, 2];
console.log(swapFirstTwo(array));
