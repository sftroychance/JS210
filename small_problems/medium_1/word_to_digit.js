// Write a function that takes a sentence string as an argument and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

// P: input: a string -> inputString
//    output: a string
// E: below
// D: array (transformation), hash for word lookup
// A:
//  - declare function wordToDigit that takes one parameter -> inputString
//  - split input string into array of words
//  - map array of words -> word
//    - return hash[word] if it exists, otherwise return word
//  REVISION: can use replace() with a regex to maintain punctuation
//  REVISION: more efficient to iterate over DIGIT_LOOKUP and replace
//  - join word array into string
//  - return string

function wordToDigit(inputString) {
  const DIGIT_LOOKUP = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // const wordRE = /\b\w+\b/g;

  // return inputString
  //   .replace(wordRE, match => DIGIT_LOOKUP[match.toLowerCase()] ?? match);

  for (let word in DIGIT_LOOKUP) {
    let re = new RegExp(`\\b${word}\\b`, 'gi');
    inputString = inputString.replace(re, DIGIT_LOOKUP[word]);
  }

  return inputString;
}

console.log(wordToDigit('Please call me at fiVe five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('no digits'));
console.log(wordToDigit(''));
