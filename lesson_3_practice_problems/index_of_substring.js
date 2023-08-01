// Write two functions that each take two strings as arguments. Their
// expected behaviors are as follows:
//
// The indexOf function searches for the first instance of a substring in
// firstString that matches the string secondString, and returns the
// index of the character where that substring begins.
//
// The lastIndexOf function searches for the last instance of a substring
// in firstString that matches the string secondString, and returns the
// index of the character where that substring begins.
//
// Both functions return -1 if firstString does not contain the substring
// specified by secondString.
//
// You may use the square brackets ([]) to access a character by index (as
// shown below), and the length property to find the string length.
// However, you may not use any other properties or methods from
// JavaScript's built-in String class.

// P: Function indexOf given a string and a substring, return index of first
// occurrence of substring in the string, -1 if not found. Function
// lastIndexOf - return the index of the last occurrence of the substring
//
// E:
// D: strings
// A: firstIndexOf:
//    - write function that takes two parameters: firstString (string to be
//    searched), secondString (substring to be located in firstString)
//    - get first character of secondString - startChar
//    - loop1-iterate from beginning of firstString until startChar is located
//      - if firstChar is located, store firstString index where found
//        - loop2 - iterate over remaining characters of secondString
//        (loop2 implemented as function)
//          - if corresponding letters do not match, go to next iteration of
//          loop1
//          - if all letters of secondString correspond, return firstString
//          index
//    - return -1
//    lastIndexOf
//    - write function that takes two parameters
//    - search from end of firstString - look for secondString in reverse?
//    or look for first character of second string then check subsequent?
//    implemented: - reverse both strings and use IndexOf
//                 - loop over firstString from last char

function isSubstringAt(string, substring, startIndex) {
  if (string.length < substring.length + startIndex) return false;

  for (let index = startIndex, subIndex = 0;
    index < string.length && subIndex < substring.length;
    index += 1, subIndex += 1) {
    if (string[index] !== substring[subIndex]) return false;
  }

  return true;
}

function altReverseString(str) {
  let reversed = '';

  for (let index = str.length - 1; index >= 0; index -= 1) {
    reversed += str[index];
  }

  return reversed;
}

function indexOf(firstString, secondString) {
  const firstChar = secondString[0];

  for (let index = 0; index < firstString.length; index += 1) {
    if (firstChar === firstString[index]) {
      if (isSubstringAt(firstString, secondString, index)) return index;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  const firstChar = secondString[0];

  for (let index = firstString.length - 1; index >= 0; index -= 1) {
    if (firstChar === firstString[index]) {
      if (isSubstringAt(firstString, secondString, index)) return index;
    }
  }

  return -1;
}

// reverse strings and use indexOf()
function altLastIndexOf(firstString, secondString) {
  const revFirstString = altReverseString(firstString);
  const revSecondString = altReverseString(secondString);

  const foundIndex = indexOf(revFirstString, revSecondString);

  if (foundIndex === -1) return -1;

  return revFirstString.length - revSecondString.length - foundIndex;
}

// note: not fit for assignment, calling `String.split()`
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

console.log(indexOf('Some strings', 's')); // 5
console.log(indexOf('Blue Whale', 'Whale')); // 5
console.log(indexOf('Blue Whale', 'Blute')); // -1
console.log(indexOf('Blue Whale', 'leB')); // -1

console.log(lastIndexOf('Some strings', 's')); // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale')); // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')); // -1
console.log(lastIndexOf('Blue Whale, Killer Whale', 'al')); // 21
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Blue')); // 0

console.log(altLastIndexOf('Some strings', 's')); // 11
console.log(altLastIndexOf('Blue Whale, Killer Whale', 'Whale')); // 19
console.log(altLastIndexOf('Blue Whale, Killer Whale', 'all')); // -1
console.log(altLastIndexOf('Blue Whale, Killer Whale', 'al')); // 21
console.log(altLastIndexOf('Blue Whale, Killer Whale', 'Blue')); // 0
