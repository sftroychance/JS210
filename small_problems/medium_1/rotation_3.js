// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the
// maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

// P: input: a number (no validation mentioned) -> inputNumber
//    output: number with the specified rotations as below
// E: given
// D: array to handle rotations
// A:
//  - declare function maxRotation that takes one parameter -> inputNumber
//  - initialize result string
//  - for (idx = 0; idx < inputnumber length; idx += 1)
//    - rotate number
//    - remove first letter of inputNumber and append to result string
//  - convert string to number and return
// NOTES:
//  Because rotateRightmostDigits will get rid of leading 0, had to modify it
//  to return a string, and in this function deal with the number
//  as a string until the number value is returned

//  Using slice as I attempted is a poor option because of the issue
//  with leading 0s; rotateRightmostDigits treats the entire number
//  as a string until the end of the function, so 0s would not be
//  truncated in interim steps as with my solution`

function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
    console.log(number);
  }

  return number;
}

// function maxRotation(inputNumber) {
//   let result = '';
//   let workingNumber = String(inputNumber);
//   let numLength = workingNumber.length;

//   for (let idx = 0; idx <= numLength - 1; idx += 1) {
//     workingNumber = rotateRightmostDigits(workingNumber, numLength - idx);
//     result += workingNumber[0];
//     workingNumber = workingNumber.slice(1);
//   }
//   return Number(result);
// }

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) return undefined;
  if (inputArray.length === 0) return [];

  return [...inputArray.slice(1), ...inputArray.slice(0, 1)];
}

function rotateRightmostDigits(number, rotateCount) {
  const resultArray = String(number).split('');

  const splitElement = resultArray.length - rotateCount;
  const result = [
    ...resultArray.slice(0, splitElement),
    ...rotateArray(resultArray.slice(splitElement))
  ]
    .join('');

  return Number(result);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
