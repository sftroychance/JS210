// Write a function that takes a number argument, and returns true if the
// number is prime, or false if it is not.
//
// You may assume that the input is always a non-negative integer.

// P: a function that takes a number, returns true if number is prime, false
// if not
// E: non-negative integer, 0 and 1 not prime, input pos integer
// D: loop
// A: - write function that takes a parameter number
//    - get floor of square root of number -> max
//    - loop 2 to max with divisor
//      - return false if number % divisor === 0
//    - return true

function isPrime(number) {
  console.log(number);

  if (number < 2 || (number > 2 && number % 2 === 0)) return false;

  for(let divisor = 3; divisor <= Math.sqrt(number); divisor += 2) {
    if (number % divisor === 0) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
