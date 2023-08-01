// Write a function that returns a substring of a string based on a
// starting index and length.
//
// If both start and end are positive integers, start is less than end, and
// both are within the boundary of the string, return the substring from
// the start index (inclusive), to the end index (NOT inclusive).
//
// If the value of start is greater than end, swap the values of the two,
// then return the substring as described above.
//
// If start is equal to end, return an empty string.
//
// If end is omitted, the end variable inside the function is undefined.
// Return the substring starting at position start up through (and
// including) the end of the string.
//
// If either start or end is less than 0 or NaN, treat it as 0.
//
// If either start or end is greater than the length of the string, treat
// it as equal to the string length.

// P: function that returns a substring from index start up to (excluding) end
// Rules: return '' start === end
//        if start > end, swap them
//        if end is undefined: return string to end
//        if start < 0 or end < 0 or either NaN, treat as 0
//        if start > strLength OR end > strLength, treat those as strLength

function substring(string, start, end) {
  let firstIndex = Number(start);
  let lastIndex = Number(end);

  if (Number.isNaN(firstIndex) || firstIndex < 0) {
    firstIndex = 0;
  }

  if (Number.isNaN(lastIndex) || lastIndex < 0) {
    lastIndex = 0;
  }

  if (end === undefined) {
    lastIndex = string.length;
  }

  if (firstIndex === lastIndex) {
    return '';
  }

  if (firstIndex > lastIndex) {
    const temp = firstIndex;
    firstIndex = lastIndex;
    lastIndex = temp;
  }

  if (firstIndex > string.length) {
    firstIndex = string.length;
  }

  if (lastIndex > string.length) {
    lastIndex = string.length;
  }

  let result = '';
  for (let idx = firstIndex; idx < lastIndex; idx += 1) {
    result += string[idx];
  }

  return result;
}

const string = 'hello world';

console.log(substring(string, 2, 4)); // "ll"
console.log(substring(string, 4, 2)); // "ll"
console.log(substring(string, 0, -1)); // ""
console.log(substring(string, 2)); // "llo world"
console.log(substring(string, 'a')); // "hello world"
console.log(substring(string, 8, 20)); // "rld"
