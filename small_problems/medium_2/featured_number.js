// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// P: given an integer, return the next greater number that is a featured number
//    - featured number: (1) odd, (2) multiple of 7, (3) each digit occurs only once
//    - note maximum value 9876543201
// E: given
// D: none
// A:
//  - declare function featured that takes one parameter -> start
//  - return a message if start > max featured number
//  - find next number that is odd and multiple of 7 -> current
//  - while current is not a featured number, increment by 14
//  - return current

function featured(start) {
  const MAX_FEATURED_NUMBER = 9876543201;

  const tooHighMessage = 'There is no possible number that fulfills those ' +
    'requirements.';

  if (start >= MAX_FEATURED_NUMBER) return tooHighMessage;

  const isOdd = num => num % 2 === 1;
  const isMultipleOf7 = num => num % 7 === 0;

  const isFeatured = num => {
    const digits = [...String(num)];
    const uniqDigits = new Set(digits);

    return digits.length === uniqDigits.size;
  };

  let current = start + 1;

  while (!(isOdd(current) && isMultipleOf7(current))) current += 1;

  while (!isFeatured(current)) current += 14;

  return current;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
