// Write a function that takes two strings as arguments, determines the length
// of the two strings, and then returns the result of concatenating the shorter
// string, the longer string, and the shorter string once again. You may assume
// that the strings are of different lengths.

// P: function that takes two strings and returns concatenation of
//    short-long-short
//    input: two strings
//    output: concatenated result
//  questions: what if receive non-string values? what if arity incorrect?

// E: below, which includes empty string
//    others dependending on questions above (assuming 2 string arguments)

// D: array for sorting

// A:
//  - write function shortLongShort that takes two params - str1 and str2
//  - place strings into array and sort by length
//  - duplicate first element of array at end of array
//  - join array elements and return

function shortLongShort(str1, str2) {
  let strings = [str1, str2];
  strings.sort((a, b) => a.length - b.length);
  strings.push(strings[0]);

  return strings.join('');
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
