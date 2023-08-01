// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase character, get
// its ASCII numeric representation from the ASCII table, add 32 to that
// number, then convert the number back to a character using the same ASCII
// table. You can use the String.fromCharCode and the String.charCodeAt
// methods for these operations.

// P: convert a string to lowercase using ASCII values
// E: empty string, no alpha chars, non-string
// D: string iteration
// A: - define function that takes one parameter - string
//    - declare and initialize result string
//    - iterate over characters index 0 to length - 1
//      - get charcode
//      - if charcode between 65-90 append char at charcode + 32
//        - else append char unchanged
//    - return result string

function toLowerCase(string) {
  const CHAR_CODE_OFFSET = 32;
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] >= 'A' && string[idx] <= 'Z') {
      const charCode = string.charCodeAt(idx);
      result += String.fromCharCode(charCode + CHAR_CODE_OFFSET);
    } else {
      result += string[idx];
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET')); // "alphabet"
console.log(toLowerCase('123')); // "123"
console.log(toLowerCase('abcDEF')); // "abcdef"
