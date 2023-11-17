// Write a function that takes a string as an argument and returns that string
// with the first character of every word capitalized and all subsequent
// characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// P: given a string, return string with first char of each word capitalized
//    and remaining chars lowercase
//  rule: word is any sequence of non-whitespace chars
//  questions: wrong type/arity?
// E: given, plus empty string
// D: array: map
// A:
//  - define function wordCap, 1 param -> str
//    - split into words
//    - map (deconstruct [first, ...rest])
//      - return first capitalized joined with rest set to lowercase
//    - join with space
//    - return

function wordCap(str) {
  return str
    .split(' ')
    // .map(([first, ...rest]) => (first?.toUpperCase() ?? '') + rest.join('').toLowerCase())
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
console.log(wordCap('this is 3 word'));
console.log(wordCap(''));    // ''
