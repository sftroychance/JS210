// Memoization is an approach that involves saving a computed answer for future
// reuse, instead of computing it from scratch every time it is needed. In the
// case of our recursive fibonacci function, using memoization saves calls to
// fibonacci(nth - 2) because the necessary values have already been computed by
// the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

// P: memoize the recursive fibonacci function for faster performance
// E: given
// D:
// A:
//  - define function fibonacciMemoized
//  - initialize calculated = {1: 1, 2: 1}
//  - return function fibonacci that takes 1 param - nth
//    - if !calculated[nth]
//        calculated[nth] = fibonacci[nth - 1] + fibonacci[nth - 2]
//    - return calculated[nth]

const fibonacci = function fibonacci() {
  const calculated = {1: 1, 2: 1};

  return function fibonacci(nth) {
    if (!calculated[nth]) {
      calculated[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    }

    return calculated[nth];
  };
}();

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
