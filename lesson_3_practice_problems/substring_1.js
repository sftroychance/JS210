// Write a function that returns a substring of a string based on a
// starting index and length.

// The start argument is the starting index. If negative, treat it as
// strLength + start where strLength is the length of the string. For
// example, if start is -3, treat it as strLength - 3.
//
// The length argument is the maximum length of the desired substring. If
// length exceeds the number of characters available, just use the
// available characters.
//
// You may use the square brackets ([]) to access a character by index (as
// shown below), and the length property to find the string length.
// However, you may not use any other properties or methods from
// JavaScript's built-in String class.

// P: a function that returns a substring, given starting index and length
// E: negative start index, start is string.length - start; negative length
// D: string iteration
// A: - declare function substr that takes 3 parameters, string, start, length
//    - return '' if length <= 0
//    - if start < 0, start = string.length - start
//    - declare and init result string to ''
//    - iterate start to (length + start) (additional check for idx <
//    str.length)
//      - append string[idx] to result
//    - return result

function substr(string, start, length) {
  if (length <= 0) {
    return '';
  }

  const begin = (start < 0) ? start + string.length : start;

  let result = '';
  for (let idx = begin; idx < length + begin && idx < string.length; idx += 1) {
    result += string[idx];
  }

  return result;
}

const string = 'hello world';

console.log(substr(string, 2, 4)); // "llo "
console.log(substr(string, -3, 2)); // "rl"
console.log(substr(string, 8, 20)); // "rld"
console.log(substr(string, 0, -20)); // ""
console.log(substr(string, 0, 0)); // ""
