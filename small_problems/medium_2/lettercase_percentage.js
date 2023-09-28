// Write a function that takes a string and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// P: input: string -> inputString
//    output: object
//    % lowercase, uppercase, neither
//    rules: implicit: space is a char, give % to 2 decimal places
// E: given
// D: arrays (filter), object (return value)
// A:
//   - declare function letterPercentages that takes one string parameter
//     -> inputString
//   - split string into char array
//   - get string length -> charCount
//   - lowercase: filter array to lowercase and get length; div by charCount
//   - uppercase: filter by uppercase
//   - neither: subtract uc + lc from 100
//   - return object

function letterPercentages(inputString) {
  // const chars = inputString.split('');
  const charCount = inputString.length;

  return {
    lowercase: ((inputString.match(/[a-z]/g) ?? []).length / charCount * 100).toFixed(2),
    uppercase: ((inputString.match(/[A-Z]/g) ?? []).length / charCount * 100).toFixed(2),
    neither: ((inputString.match(/[^a-z]/gi) ?? []).length / charCount * 100).toFixed(2),
  };

  // const letters = chars.filter(char => char.match(/[a-z]/i));
  // const lowercase = letters
  //   .filter(char => char === char.toLowerCase())
  //   .length / charCount * 100.0;
  // const uppercase = letters
  //   .filter(char => char === char.toUpperCase())
  //   .length / charCount * 100.0;
  // const neither = (charCount - letters.length) / charCount * 100.0;

  // return {
  //   lowercase: lowercase.toFixed(2),
  //   uppercase: uppercase.toFixed(2),
  //   neither: neither.toFixed(2),
  // };

}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

