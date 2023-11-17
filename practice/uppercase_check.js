// Write a function that takes a string argument and returns true if all of the
// alphabetic characters inside the string are uppercase; otherwise, return
// false. Ignore characters that are not alphabetic.

// P: predicate function that takes a string, returns true if all alpha
//    chars therein are uppercase, else false
//  questions: wrong arity or type?
// E: given, including empty string
// D: string
// A: define function isUpperCase, one param -> str
//    - return str === str.toUpperCase()

function isUppercase(str) {
  return str === str.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
