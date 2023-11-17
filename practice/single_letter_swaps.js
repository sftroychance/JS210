// Given an array of strings and an original string, write a function to output
// an array of boolean values - true if the word can be formed from the original
// word by swapping two letters only once and false otherwise.

// P: input: array of strings, original string -> arr, target
//    output: array of booleans
//    - true if word can form target by switching 2 letters
//    clarifying questions:
//    - different arity?
//    - args always arr and string?
//    - empty array
//    - empty string
//    - elements always strings? if not?
// E: given
// D: arrays
// A:
//  - declare function validateSwaps that takes 2 params -> words, target
//  - map words
//    - iterate over letters
//      - count = 0
//      - if orig.indexOf(letter) !== current.indexOf(letter) -> count += 1
//      - return count === 2
//  - return array

function validateSwaps(words, target) {
  return words
    .map(word => {
      if ([...word].sort().join('') !== [...target].sort().join('')) {
        return false;
      }

      let count = 0;
      for (let letter of word) {
        if (target.indexOf(letter) !== word.indexOf(letter)) count += 1;
      }

      return count === 2;
    });
}

console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"));
// ➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345"));
// ➞ [true, true, true, true]

console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768"));
// ➞ [true, false, false, false]

console.log(validateSwaps([], "9768"));
console.log(validateSwaps(["9786"], ""));
