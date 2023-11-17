// Create a function which takes a string txt and expands it as per following
// rules:

// The numeric values represent the occurrence of each letter proceding that
// numeric value.
// The first occurrence of a numeric value should be the number of times each
// character behind it is repeated, until the next numeric value appears.
// If there are consecutive numeric characters, ignore them all except last one
// If there are two consecutive alphabetic characters then the string will
// remain unchanged.
// Empty strings should return an empty string.

// P: input: a string
//    output: expanded string per rules
// E: given
// D: array: map
// A:
//  - declare function stringExpansion that accepts one param -> str
//  - split str along transition from letter to number or boundary to number
//  - split each substring along number to letter
//  - map each number to number % 10
//  - map each subarray to each character repeated by number times
//  - join

// alternate algorithm (less functional)
//  - declare function
//  - declare output string = ''
//  - declare count = 1;
//  - iterate over str
//    - if digit, set count = digit
//    - if char, output += char.repeat(count)
//  - return output str

function expandString(first, second) {
  let output = '';

  // if (first.match(/\d+/)) {
  // have to account for case when there is a digit followed by no chars
  // second will not have a value and cannot be iterated
  if (second) {
    for (let letter of second) {
      let count = first % 10;
      output += letter.repeat(count);
    }
  } else if (first.match(/\D+/)) {
    output += first;
  }

  return output;
}

// function stringExpansion(str) {
//   if (str.match(/^\d+$/)) return '';

//   let reLetterThenNumber = /(?<=\D)(?=\d+)/;
//   let reNumberThenLetter = /(?<=\d+)(?=\D)/;

//   return str
//     .split(reLetterThenNumber)
//     .map(substr => substr.split(reNumberThenLetter))
//     .map(([first, second]) => expandString(first, second))
//     .join('');
// }

// lesson: don't let desire for functional solution let you overlook a simple
// procedural solution; this accounts for all edge cases (str starting with
// letter or ending with digit, and string of all digits)
function stringExpansion(str) {
  let output = '';
  let count = 1;

  for (let letter of str) {
    if (letter.match(/\d/)) {
      count = Number(letter);
    } else {
      output += letter.repeat(count);
    }
  }

  return output;
}

console.log(stringExpansion("3M2u5b2a1s1h2i1r")); // "MMMuubbbbbaashiir"
console.log(stringExpansion("3Mat")); // "MMMaaattt"      // correct
console.log(stringExpansion("3M123u42b12a")); // "MMMuuubbaa"
console.log(stringExpansion("airforce")); // "airforce"
console.log(stringExpansion("air2force")); // "airffoorrccee"
console.log(stringExpansion("air2force2")); // "airffoorrccee"
console.log(stringExpansion("")); // ""
console.log(stringExpansion("3579")); // ""
