// Write a function that computes the difference between the square of the sum
// of the first n positive integers and the sum of the squares of the first n
// positive integers.

// P: given an integer, get all positive integers up to and including that
//    number; get sum of those integers and square that value; get the
//    squares of all the digits and get the sum of that value; subtract

//  E: given

//  D: array for transformation

//  A:
//  - declare functino sumSquareDifference that takes an integer parameter ->
//    integerCount
//  - create an array of range 1 to integerCount -> integers
//  - reduce integers array and square the value -> squareSum
//  - map integers to square of the value
//  - get sum of that array -> sumSquares
//  return squareSum - sumSquares

function sumSquareDifference(integerCount) {
  const integers = Array.from({ length: integerCount }, (_, idx) => idx + 1);

  const getSum = (sum, val) => sum + val;

  const squareSum = Math.pow(integers.reduce(getSum), 2);

  const sumSquares = integers
    .map(val => Math.pow(val, 2))
    .reduce(getSum);

  return squareSum - sumSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
