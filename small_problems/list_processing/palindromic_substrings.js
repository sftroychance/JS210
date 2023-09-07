// Write a function that returns a list of all substrings of a string that are
// palindromic. That is, each substring must consist of the same sequence of
// characters forwards as backwards. The substrings in the returned list should
// be sorted by their order of appearance in the input string. Duplicate
// substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous
// exercise.

function leadingSubstrings(str) {
  return [...str]
    .map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return [...str]
    .map((_, idx) => str.slice(idx))
    .flatMap(substr => leadingSubstrings(substr));
}

function palindromes(str) {
  return substrings(str)
    .filter(word => word.length > 1)
    .filter(isPalindrome);
}

function isPalindrome(str) {
  return str === [...str].reverse().join('');
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
