// Write a function that takes one argument, a positive integer, and returns the
// sum of its digits. Do this without using for, while, or do...while loops -
// instead, use a series of method calls to perform the sum.

// P: Given a positive integer, return the sum of its digits
//  rules: don't use for/while/dowhile loops
// questions: wrong arity, wrong type, negative param
// E: no arg, string arg
// D: array: reduce
// A:
//  - define function sum that takes one argument - number
//  - convert number to a string
//  - split string into array
//  - map array to int value
//  - reduce array to get sum
//  - return sum

function sum(number) {
  return [...String(number)]
    // .map(val => parseInt(val, 10)) - can convert in reduce()
    .reduce((sum, val) => sum + Number(val), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
