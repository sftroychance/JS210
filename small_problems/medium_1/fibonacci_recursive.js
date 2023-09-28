// Write a recursive function that computes the nth Fibonacci number, where nth
// is an argument passed to the function.

// P: input: number - nth fibonacci to calculate
//    output: nth fibonacci number
// E: below
// D: none
// A:
//  - declare function fibonacci that takes one parameter -> target
//  - base case: if target <= 2, return 1
//  - else: return fibonacci(target - 2) + fibonacci(target - 1)

function fibonacci(target) {
  if (target <= 2) return 1;
  return fibonacci(target - 2) + fibonacci(target - 1);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
