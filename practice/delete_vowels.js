// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed.

// P: function, takes array of strings, return array of those strings
//    with their vowels removed
// questions: wrong type, wrong arity, non-string elements in array?
// E: empty array
// D: array: map, string: replace
// A: - define function removeVowels that takes 1 param -> strArray
//  - map strArray
//    - replace string with same string with vowels removed
//  - return array
//  - can define regex pattern /[aeiou]/gi for the replace

function removeVowels(stringArray) {
  const vowelRE = /[aeiou]/gi;
  return stringArray
    .map(str => str.replace(vowelRE, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
console.log(removeVowels([])); // []
