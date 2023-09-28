// Write a function that calculates and returns the index of the first Fibonacci
// number that has the number of digits specified by the argument. (The first
// Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal
// to 2.

// P: Given a number, find the index (1-based) of the first fibonacci
//    number that has that length
//    input: number -> targetLength
//    output: number--index (starting from 1)
// E: given
// D: string conversion of numbers to check length
// A:
//  - declare function that takes one parameter => targetLength (bigint)
//  - declare index = 2
//  - declare [prev, next] = [0, 1]
//  - loop
//    - declare current = prev + next
//    - if String(current).length === targetLength return index
//    - index += 1

function findFibonacciIndexByLength(targetLength) {
  let index = 3n;
  let first = 1n;
  let second = 1n;
  let current;

  while (true) {
    current = first + second;
    if (BigInt(String(current).length) === targetLength) return index;
    index += 1n;
    first = second;
    second = current;
  }
}
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
