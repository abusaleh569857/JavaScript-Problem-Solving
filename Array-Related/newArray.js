const uniqueWithFilter = numbers.filter((val, index) => {
    return numbers.indexOf(val) === index;
});

const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 6, 1];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); 
