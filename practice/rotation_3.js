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

// P: given a number, find maximum rotation
//  maximum rotation: rotate number, then with each successive iteration rotate
//  the last numbers, keeping the first (iteration) digits in place
// note: leading zero issue (appears to resolve itself when converting to num)
// E: given
// D: string (slice)
// A:
//  - declare function maxRotation, one param -> num
//  - convert num to a string
//  - loop str.length to 2
//    - string = rotateRightmostDigits(string, idx)
//  - convert string to number
//  - return number

function maxRotation(num) {
  for (let rotation = String(num).length; rotation >= 2; rotation -= 1) {
    num = rotateRightmostDigits(num, rotation);
  }

  return num;
}

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

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
