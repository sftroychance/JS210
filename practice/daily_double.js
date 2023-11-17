// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// P: function that takes a string and collapses consecutive chararacters into
//  one
//  input: a string
//  output: string with collapsed consecutive chars
// questions: argument type or arity mismatch?
// E: given, including empty string
// D: array for split
// A:
// define function crunch that takes one parameter inputString
// define a regex that splits when the character changes
// split string along that regex
// map each substring to its first character
// join array and return string

function crunch(inputString) {
  // let re = /(.)\1*/;
  // let substrings = inputString.split(re);
  // return substrings.join('');

  let re = /(.)\1*/g;
  console.log(inputString.replaceAll(re, "$1"));
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
