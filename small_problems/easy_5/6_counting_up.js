// Write a function that takes an integer argument and returns an array
// containing all integers between 1 and the argument (inclusive), in ascending
// order.  You may assume that the argument will always be a positive integer.

function sequence(number) {
  const result = [];

  for (let counter = 1; counter <= number; counter += 1) {
    result.push(counter);
  }

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

// note from solutions:
// function sequence(number) {
//   return Array.from({length: number}, (_, i) => i + 1);
// } // sequence(5) => [1, 2, 3, 4, 5]
