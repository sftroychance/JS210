// Write a function that takes one argument, a positive integer, and
// returns a string of alternating '1's and '0's, always starting with a
// '1'. The length of the string should match the given integer.

// A: - define function that takes one parameter, a positive integer strLength
//    - declare binaryFlag and set to true
//    - declare result string and init to ''
//    - loop strLength times
//      - cast binaryFlag to Number and append to result string
//      - change binaryFlag
//    - log string

function stringy(strLength) {
  let binaryFlag = true;
  let result = '';

  for (let i = 0; i < strLength; i += 1) {
    result += Number(binaryFlag);
    binaryFlag = !binaryFlag;
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"