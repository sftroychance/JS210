// Write a function that determines and returns the UTF-16 string value of a
// string passed in as an argument. The UTF-16 string value is the sum of the
// UTF-16 values of every character in the string. (You may use
// String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

// P: Given a string, return total UTF-16 value of string (sum of UTF-16 values)
// - input: a string
// - output: utf value (integer)

// Q: if wrong param type or arity?

// E: below, including empty string

// D: array - reduce

// A:
//  - write function utf16Value that takes one param - str
//  - split str into array of chars - charArray
//  - map array to char codes
//  - reduce array for sum and return value

function utf16Value(str) {
  return [...str]
    .map(char => char.charCodeAt(0))
    .reduce((sum, val) => sum + val, 0);
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
