// Write a function that takes a string of digits and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the
// first character is a +, your function should return a positive number; if it
// is a -, your function should return a negative number. If there is no sign,
// return a positive number.  You may assume the string will always contain a
// valid number.

// A: - declare function that takes one string parameter 'str'
//    - declare object to map chars to numeric values
//    - split string into character array
//    - declare 'negateFlag' and set to false
//    - check first char in array
//      - if -, set 'negateFlag' to true
//      - if + or -, shift to remove that char from array
//    - reverse array
//    - reduce to get sum

//  Revision: determined + or - value within reduce method

function stringToSignedInteger(str) {
  const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};

  const strArray = str.split('').reverse();

  return strArray.reduce((sum, char, idx) => {
    if (char === '-') {
      return -sum;
    }

    if (char === '+') {
      return sum;
    }

    return sum + DIGITS[char] * 10 ** idx;
  }, 0);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100