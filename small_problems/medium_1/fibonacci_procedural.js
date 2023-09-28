// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

// A:
//  - declare function that takes one parameter - target
//  - declare first = 1, second = 1
//  - for (let current = 3; current <= target; current += 1)
//    - fibonacci = first + second
//    - first = second
//    - second = fibonacci
//  - return fibonacci

function fibonacci(target) {
  if (target <= 2) return 1;

  let first = 1n;
  let second = 1n;
  let fibonacci;

  for (let current = 3; current <= target; current += 1) {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
  }

  return fibonacci;
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(100));
console.log(fibonacci(1000));
console.log(fibonacci(10000));
