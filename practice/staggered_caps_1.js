// Write a function that takes a string as an argument and returns that string
// with a staggered capitalization scheme. Every other character, starting from
// the first, should be capitalized and should be followed by a lowercase or
// non-alphabetic character. Non-alphabetic characters should not be changed,
// but should be counted as characters for determining when to switch between
// upper and lower case.

// P: given a string, return with staggered caps
//  rule: keep non-alpha, alternate over every letter
// E: given, plus empty string
// D: array: map
// A:
// - function staggeredCase, 1 param - str
//  - split str into chars
//  - map chars with index
//    - to uppercase if index % 2 == 0, else lowercase
//  - join and return

function *cycleArray(arr) {
  let iteration = 0;

  while (true) {
    yield arr[iteration % arr.length];
    iteration += 1;
  }
}

function staggeredCase(str) {
  const caseFunctions = [
    char => char.toUpperCase(),
    char => char.toLowerCase()
  ];

  const caseIterator = cycleArray(caseFunctions);

  return [...str]
    .map(char => caseIterator.next().value(char))
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
console.log(staggeredCase(''));   // ''
