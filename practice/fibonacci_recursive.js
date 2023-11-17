// Write a recursive function that computes the nth Fibonacci number, where nth
// is an argument passed to the function.

// P: recursive fibonacci
// E: given
// D: none
// A:
//  - declare function fibonacci that takes one argument -> targetIndex
//  - if targetIndex = 1 or 2 => return 1
//  - else return fibonacci(targetIndex - 1) + fibonacci(targetIndex - 2)
//

function fibonacci(targetIndex) {
  if (targetIndex <= 2) return 1;
  return fibonacci(targetIndex - 1) + fibonacci(targetIndex - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
