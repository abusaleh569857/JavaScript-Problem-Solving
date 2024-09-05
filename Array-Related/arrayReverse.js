/* 

Question : 

Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let revColors = [];
for (const color of colors){
   revColors.unshift(color);
}
console.log(revColors);