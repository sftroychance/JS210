// Create a function that computes the Greatest Common Divisor of two
// positive integers.

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return gcd(num2, (num1 % num2));
  }
}

console.log(gcd(12, 4));
console.log(gcd(4, 12));
console.log(gcd(15, 10));
console.log(gcd(10, 15));
console.log(gcd(9, 2));
console.log(gcd(2, 9));

function gcdArray(array) {
  array = [...array]; // copies element by element; spread operator

  let currentGCD = array.pop();

  while (array.length > 0) {
    currentGCD = gcd(currentGCD, array.pop());
  }

  return currentGCD;
}

console.log(gcdArray([12, 4]));
console.log(gcdArray([12, 4, 12]));
console.log(gcdArray([20, 3, 7]));
console.log(gcdArray([20, 15, 5, 45]));
console.log(gcdArray([30, 120, 30000, 12000]));

// verify non-mutating
myArray = [47, 94];
console.log(gcdArray(myArray));
console.log(myArray);
