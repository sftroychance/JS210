// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power. Do not
// worry about validating the input.

let rlSync = require('readline-sync');
let firstNumber = rlSync.question('Enter the first number: ');
let secondNumber = rlSync.question('Enter the second number: ');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
// also: let firstNumber = Number(rlSync.question('Enter the first number: '));

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = \
${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = \
${firstNumber ** secondNumber}`);

// Other solutions created an array of operators and then used `eval()` to
// carry out those operations with the set of entered operands, resulting in
// much shorter code.