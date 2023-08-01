// Implement a function that determines whether a string begins with
// another string. If it does, the function should return true, or false
// otherwise.

// P: function, determine if string begins with another string
// E: empty 2nd string, string equals substring
// D: string
// A: - define function with two parameters, str and substr
//    - return false if substr length is greater than str length
//    - iterate over str from index = 0 while index < substr.length
//      - return false if str[idx] !== substr[idx]
//    - return true

function startsWith(string, searchString) {
  // strictly unnecessary, but prevents unnecessary iterations
  if (string.length < searchString.length) return false;

  for (let idx = 0; idx < searchString.length; idx += 1) {
    if (string[idx] !== searchString[idx]) return false;
  }

  return true;
}

const str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We')); // true
console.log(startsWith(str, 'We put')); // true
console.log(startsWith(str, '')); // true
console.log(startsWith(str, 'put')); // false

const longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString)); // false

console.log(startsWith(str, str)); // true
