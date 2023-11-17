// Write a function that returns a list of all substrings of a string that are
// palindromic. That is, each substring must consist of the same sequence of
// characters forwards as backwards. The substrings in the returned list should
// be sorted by their order of appearance in the input string. Duplicate
// substrings should be included multiple times.

// You may (and should)); use the substrings function you wrote in the previous
// exercise.

// For the purpose of this exercise, you should consider all characters and pay
// attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
// are not. In addition, assume that single characters are not palindromes.

// P: return all palindromic substrings contained in a string
//  rules: case sensitive, include duplicates, substring at least 2 chars
// questions: wrong arity or type? deal with any other chars? spaces?
// E: given, add empty str
// D: arrays: map, filter
// A: - define function palindromes that takes one param - str
//    - get substrings (function written)
//    - filter to substrings length >= 2
//    - filter palindromes (str.toReversed() === str)
//    - return result

function leadingSubstrings(str) {
  return Array.from({length: str.length}, (_, idx) => str.slice(0, idx + 1));
  // .map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return Array.from({length: str.length}, (_, idx) => str.slice(idx))
    .flatMap(substr => leadingSubstrings(substr));
}

function palindromes(str) {
  const isPalindrome = (str) => [...str].toReversed().join('') === str;

  return substrings(str)
    .filter(str => str.length >= 2)
    .filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes(''));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
