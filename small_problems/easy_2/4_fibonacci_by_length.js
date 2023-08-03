// Write a function that calculates and returns the index of the first
// Fibonacci number that has the number of digits specified by the
// argument. (The first Fibonacci number has an index of 1.)

// A:   - declare function that takes an integer parameter - digitCount
//      - declare currentFibonacci and init to 1
//      - declare prevFibonacci and init to 1
//      - loop starting at index 3
//        - temp = currentFibonacci
//        - currentFibonacci += prevFibonacci
//        - prevFibonacci = temp
//        - return index if currentFibonacci length === digitCount

function findFibonacciIndexByLength(digitCount) {
  let current = 1n;
  let previous = 1n;
  let temp;

  for (let i = 3n; ; i += 1n) {
    temp = current;
    current += previous;
    previous = temp;

    if (BigInt(current.toString().length) === digitCount) {
      return i;
    }
  }
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
