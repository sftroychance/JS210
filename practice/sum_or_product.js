// Write a program that asks the user to enter an integer greater than 0, then
// asks whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.

// P: request user input for an integer > 0, request user to select sum or
// product of 1 through given number, display result.
// - input - integer greater than 0
// - output - sum or product

// E: user enters 0, user enters non-integer

// D: array for range and reduce methods

// A:
//  - write function main() to be program driver
//  - request user enter an integer greater than 0
//    - error message and end if not integer greater than 0
//  - request user enter 's' or 'p' for sum or product
//    - error if value entered is not 's' or 'p'
//  - create array representing range 1 to entered number
//  - if sum, reduce array to its sum
//  - if product, reduce array to its product
//  - display result

function main() {
  let rlSync = require('readline-sync');

  let input = null;

  while (!input || input <= 0) {
    input = parseInt(rlSync.question('Enter an integer greater than 0: '), 10);
  }

  let operation = null;

  while (!operation || !['s', 'p'].includes(operation)) {
    operation = rlSync.question('Enter "s" to compute sum, "p" to compute product: ');
  }

  let array = createRangeArray(input);

  if (operation === 's') {
    console.log(`The sum of integers between 1 and ${input} is ${cumulativeSum(array)}`);
  } else {
    console.log(`The product of integers between 1 and ${input} is ${cumulativeProduct(array)}`);
  }
}

function createRangeArray(stop) {
  return Array.from({length: stop}, (_, x) => x + 1);
}

function cumulativeSum(array) {
  return array.reduce((sum, value) => sum + value, 0);
}

function cumulativeProduct(array) {
  return array.reduce((prod, value) => prod * value, 1);
}

main();
