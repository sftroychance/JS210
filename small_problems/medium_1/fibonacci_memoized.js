// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

const fibonacci = (() => {
  const fib = {1: 1, 2: 1};

  return (target) => {
    fib[target] = fib[target] ?? fibonacci(target - 2) + fibonacci(target - 1);
    return fib[target];
  };
})();

// const fib = {1: 1, 2: 1};

// function fibonacci(target) {
//   if (fib[target]) return fib[target];
//   fib[target] = fibonacci(target - 2) + fibonacci(target - 1);
//   return fib[target];
// }

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(100));
console.log(fibonacci(1000));
console.log(fibonacci(10000));
