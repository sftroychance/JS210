// Write a function that takes a positive integer as an argument and returns
// that number with its digits reversed.

function reverseNumber(number) {
  const revNumber = String(number)
    .split('')
    .reverse()
    .join('');

  return Number(revNumber);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1