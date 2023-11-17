// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// changed to lowercase. Leave all other characters unchanged.

// P: function, takes a string, returns swapped case string (nonalpha unchd)
//  questions: wrong arity, type?
// E: given, plus empty string
// D: string: replace with regex
// A:
//  - define function swapCase, 1 param -> str
//  - replace uppercase with lowercase with replace callback function
//  - replace lowercase with uppercase with replace callback function
//  - ERROR: once you replace uppercase with lowercase, then all the letters
//    are lowercase and will all be made uppercase
//  - return string

function swapCase(str) {
  const swap = char => {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  };

  return str
    .split('')
    .map(swap)
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
console.log(swapCase(''));
