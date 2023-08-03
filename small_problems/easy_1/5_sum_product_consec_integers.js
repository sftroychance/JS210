// Write a program that asks the user to enter an integer greater than 0,
// then asks if the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.

function cumulativeSum(num) {
  let result = 0;

  for (let i = num; i > 0; i -= 1) {
    result += i;
  }

  return result;
}

function factorial(num) {
  let result = 1;

  for (let i = num; i > 0; i -= 1) {
    result *= i;
  }

  return result;
}

function cumulativeSumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function factorialArray(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

const rlSync = require('readline-sync');

let prompt = 'Please enter an integer greater than 0: ';
let accepted = /(?<![-])[1-9][0-9]*/;
let value = rlSync.question(prompt, {
  limit: accepted,
  limitMessage: 'Invalid input.',
});
value = parseInt(value, 10);

prompt = 'Enter "s" to compute the sum, "p" to compute the product: ';
accepted = ['s', 'p'];
const operation = rlSync.question(prompt, {
  limit: accepted,
  limitMessage: 'Invalid input - "s" or "p".',
});

let result;
let resultType;
if (operation === 's') {
  result = cumulativeSum(value);
  resultType = 'sum';
} else if (operation === 'p') {
  result = factorial(value);
  resultType = 'product';
}

const message = `The ${resultType} of the integers between 1 and ${value}`
              + ` is ${result}.`;
console.log(message);

// further exploration: wrote functions to accept arrays
const myArray = [5, 4, 3, 2, 1];

console.log(cumulativeSumArray(myArray));
console.log(factorialArray(myArray));
console.log(factorialArray([]));
