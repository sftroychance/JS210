// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are
// uppercase letters, and one representing the number of characters that are
// neither.

// P: function that takes a string, returns object with LC UC and neither counts
// questions: wrong arity or type?
// E: given, including empty string
// D: string: pattern matching
// A: - define function letterCaseCount, 1 param (str)
//  - define regex patterns for UC and LC
//  - set lowercase count equal to LC match result count (0 if null)
//  - set uppercase count to UC match result count (0 if null)
//  - set neither to str length - lowercase - uppercase
//  - return object (shorthand)

function letterCaseCount(str) {
  const reUC = /[A-Z]/g;
  const reLC = /[a-z]/g;

  const uppercase = str.match(reUC)?.length ?? 0;
  const lowercase = str.match(reLC)?.length ?? 0;
  const neither = str.length - uppercase - lowercase;

  return {lowercase, uppercase, neither};
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
