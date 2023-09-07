// Write a function that takes one argument, a positive integer, and returns the
// sum of its digits. Do this without using for, while, or do...while loops -
// instead, use a series of method calls to perform the sum.

// a:
// - convert integer to string word
// - split word into array of chars
// - map chars to integers
// - reduce integers to sum
// - return sum

function sum(number) {
  return String(number)
    .split('')
    .map(char => Number(char)) // recall you can do .map(Number) here
    .reduce((sum, value) => sum + value, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

// The LS example here combines the map with the reduce:
// .reduce((sum, value) => sum + Number(value), 0)
