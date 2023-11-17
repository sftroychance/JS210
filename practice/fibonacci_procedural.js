// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

// P: non-recursive fibonacci

function fibonacci(targetIndex) {
  let first = 1;
  let second = 1;
  let current;

  for (let iteration = 3; iteration <= targetIndex; iteration += 1) {
    current = first + second;
    first = second;
    second = current;
  }

  return current;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
