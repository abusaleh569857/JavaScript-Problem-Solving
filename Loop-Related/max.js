// Using Loop
const numbers = [12, 45, 7, 89, 23, 56];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Largest number:", max);

// Using max function

const nums = [12, 45, 7, 89, 23, 56];

const maximum = Math.max(...numbers);

console.log("Maximum number:", maximum);
