// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the end.

// P: Given a number and a rotation count n, return the number with the last
//    n digits rotated (rotation: move first digit to end)
//    input: number, rotation count
//    output: number
// question: numbers always integers? wrong type/arity? will rotation
//    count always be <= number length?
// E: given
// D: string: slice
// A:
//  - declare function rotateRightmostDigits, 2 params -> number, rotationCount
//  - return number if rotationCount is 1
//  - convert number to a string
//  - create new string -> str.slice(0, -rotationCount) +
//    rotateArray([...str.slice(-rotationCount)]).join('')
//  - convert new string to number
//  - return number

function rotateRightmostDigits(number, rotationCount) {
  if (rotationCount === 1) return number;

  const numberString = String(number);
  const resultString = numberString.slice(0, -rotationCount) +
    rotateArray([...numberString.slice(-rotationCount)]).join('');

  return Number(resultString);
}

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) return undefined;
  if (inputArray.length === 0) return [];

  return [...inputArray.slice(1), ... inputArray.slice(0, 1)];
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
