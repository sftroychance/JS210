// Write a function that takes a string as an argument, and returns the
// string stripped of spaces from both ends. Do not remove or alter internal spaces.
//
// You may use the square brackets ([])) to access a character by index (as
// shown below)), and the length property to find the string length.
// However, you may not use any other properties or methods from
// JavaScript's built-in String class.

// P: function that takes a string and returns trimmed string
// E: all spaces, empty string
// D: string iteration
// A: - write function that takes one parameter -> str
//    - declare output string
//    - iterate over string
//      - when non-space char reached, append remaining string to output
//    - reverse output
//    - declare output2 string
//    - iterate over reversed string
//      - when non-space char reached, append remaining string to output2
//    - reverse output2
//    - return string
//    modified:
//    - get index of first character - firstIndex
//      - from index = 0, increment until first non-space char reached
//    - get index of last character - lastIndex
//      - from index = str.length - 1, decrement until first non-space char
//    - declare output string
//    - loop index = firstIndex to lastIndex
//      - append str[index] to output string

function trim(str) {
  let index = 0;
  while (str[index] === ' ') index += 1;

  const startIndex = index;

  index = str.length - 1;
  while (str[index] === ' ') index -= 1;

  const endIndex = index;

  let output = '';
  for (index = startIndex; index <= endIndex; index += 1) {
    output += str[index];
  }

  return output;
}

console.log(`"${trim('  abc  ')}"`); // "abc"
console.log(`"${trim('  abc')}"`); // "abc"
console.log(`"${trim('abc   ')}"`); // "abc"
console.log(`"${trim(' ab c')}"`); // "ab c"
console.log(`"${trim(' a b  c')}"`); // "a b  c"
console.log(`"${trim('      ')}"`); // ""
console.log(`"${trim('')}"`); // ""
