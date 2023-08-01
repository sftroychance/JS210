// Write a function named checkGoldbach that uses Goldbach's Conjecture to
// log every pair of primes that sum to the number supplied as an argument.
// The conjecture states that "you can express every even integer greater
// than 2 as the sum of two primes". The function takes as its only
// parameter, an integer expectedSum, and logs all combinations of two
// prime numbers whose sum is expectedSum. Log the prime pairs with the
// smaller number first. If expectedSum is odd or less than 4, your
// function should log null.

// A: - function that takes a parameter expectedSum
//    - log null (+ \n) and return if expectedSum < 4 or is odd
//    - log 2 2 if expectedSum === 4
//    - loop on two variables min and max - min = 3, max = expectedSum - 3
//    - each loop min += 2, max -= 2; loop while min <= max
//      - log min and max if both prime
//    - log \n

function isPrime(number) {
  if (number < 2 || (number > 2 && number % 2 === 0)) return false;

  for(let divisor = 3; divisor <= Math.sqrt(number); divisor += 2) {
    if (number % divisor === 0) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  console.log(`For expectedSum = ${expectedSum}`);
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null, '\n');
    return;
  }

  // allows loop min/max to increment/decrement by 2, for fewer iterations
  // 2 is the only even prime number
  if (expectedSum === 4) console.log(2, 2);

  for(let min = 3, max = expectedSum - 3; min <= max; min += 2, max -= 2) {
    if (isPrime(min) && isPrime(max)) console.log(min, max);
  }

  console.log();
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(6);
checkGoldbach(8);
checkGoldbach(10);
checkGoldbach(12);
checkGoldbach(100);


