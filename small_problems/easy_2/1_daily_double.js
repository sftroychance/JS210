// Write a function that takes a string argument and returns a new string
// that contains the value of the original string with all consecutive
// duplicate characters collapsed into a single character.

// A: - declare function that takes one parameter, string
//    - initialize result string to ''
//    - declare lastChar variable, init to ''
//    - iterate over characters
//      - if char !== lastChar - lastChar = char and append to result string
//    - return result string

// function crunch(string) {
//   let result = '';
//   let lastChar = '';
//
//   for (let index = 0; index < string.length; index += 1) {
//     const char = string[index];
//
//     if (char !== lastChar) {
//       result += char;
//       lastChar = char;
//     }
//   }
//
//   return result;
// }

// further exploration: use regex
// function crunch(string) {
//   if (!string) {
//     return '';
//   }
//
//   const re = /(.)(?!\1)/g;
//   return string.match(re).join('');
// }

// further exploration: regex with String.prototype.replace()
const crunch = (string) => string.replace(/(.)\1*/g, '$1');

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""
