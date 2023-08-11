// For this exercise we're going to learn more about type conversion by
// implementing our own parseInt function that converts a string of numeric
// characters (including an optional plus or minus sign) to a number.  The
// function takes a string of digits as an argument, and returns the
// appropriate number. Do not use any of the built-in functions for converting
// a string to a number type.  For now, do not worry about leading + or -
// signs, nor should you worry about invalid characters; assume all characters
// will be numeric.
//
// A: - declare function `stringToInteger()` that takes a string parameter
//    - declare variable `number` and init to 0
//    - iterate in reverse over string with an increment counter `power` and a
//    decrement counter `idx`
//      - allow implicit coercion to convert character to digit in arith
//      operation: `char` * (10 ** idx);
//    - return number

function stringToInteger(str) {
  let number = 0;

  for(let idx = str.length - 1, power = 0; idx >= 0; idx -= 1, power += 1) {
    number += str[idx] * (10 ** power);
  }

  return number;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570

// LS solution: Implicit number conversion would probably fit the definition
// of 'built-in' function; the official solution uses an array that maps the
// digit characters to numeric values