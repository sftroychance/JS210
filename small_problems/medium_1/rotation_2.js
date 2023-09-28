// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the end.

// P:
// input: two integers (no notes on validation) - number, rotateCount
// output: an integer with last n digits rotated

// E: below

// D: array for manipulating rotation

// A:
//  - declare function rotateRightmostDigits that takes two parameters
//    -> number, rotateCount
//  - convert number to string
//  - split string into array of characters
//  - return array.slice(0, length - rotateCount) concat with
//    rotateArray(array.slice(length - rotateCount)) and joined
//    - use rotateArray previously defined

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

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) return undefined;
  if (inputArray.length === 0) return [];

  return [...inputArray.slice(1), ...inputArray.slice(0, 1)];
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
