// Write a function that takes a string and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// P: function that takes a string and returns object with LC, UC, neither
//    as percentages
//  rules: output 2 decimal places
// E: given
// D: array: filter
// A:
//  - declare function letterPercentages, one param -> str
//  - split string into an array
//  - filter string for lowercase letters and get length and %
//  - filter string for uppercase letters and get length and %
//  - neither = total length - uc - lc to %
//  - return object with values

function letterPercentages(str) {
  let lowercase = str.match(/[a-z]/g)?.length ?? 0;
  let uppercase = str.match(/[A-Z]/g)?.length ?? 0;
  let neither = str.length - lowercase - uppercase;

  const percentage = (val) => (val * 100 / str.length).toFixed(2);

  lowercase = percentage(lowercase);
  uppercase = percentage(uppercase);
  neither = percentage(neither);

  return {lowercase, uppercase, neither};
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
