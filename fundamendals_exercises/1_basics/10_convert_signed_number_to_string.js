// In the previous exercise, you reimplemented a function that converts
// non-negative numbers to strings. In this exercise, you're going to extend
// that function by adding the ability to represent negative numbers.  You may
// not use any of the standard conversion functions available in JavaScript,
// such as String(), Number.prototype.toString, or an expression such as '' +
// number. You may, however, use the integerToString function from the previous
// exercise.

function signedIntegerToString(number) {
  const DIGIT_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let workingNumber = Math.abs(number);
  let result = '';

  do {
    result = DIGIT_CHARS[workingNumber % 10] + result;
    workingNumber = Math.floor(workingNumber / 10);
  } while (workingNumber > 0);

  if (Object.is(number, -0)) {
    return '-0';
  }

  if (number < 0) {
    return `-${result}`;
  }

  if (number > 0) {
    return `+${result}`;
  }

  return result;
}

console.log(signedIntegerToString(4321)); // "+4321"
console.log(signedIntegerToString(-123)); // "-123"
console.log(signedIntegerToString(0)); // "0"
console.log(signedIntegerToString(-0)); // "0"
console.log(signedIntegerToString(-0) === "-0"); // true
