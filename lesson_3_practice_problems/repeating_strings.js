// Implement a function that takes a string and a number times as
// arguments. The function should return the string repeated times number
// of times. If times is not a number, return undefined. If it is a
// negative number, return undefined also. If times is 0, return an empty
// string. You may ignore the possibility that times is a number that isn't an
// integer.

// P: A function takes a string and number, returns string repeated number times
// E: non-number value for times, negative value for times
// D: string
// A: - write function that takes two parameters, string and times
//    - return undefined if times is not number or is negative
//    - declare result string and initialize to ''
//    - while times > 0
//      - append string to result
//      - decrement times
//    - return result string

function repeat(string, times) {
  if (!Number.isInteger(times) || times < 0) return undefined;

  let result = '';

  let iteration = times;
  while (iteration > 0) {
    result += string;
    iteration -= 1;
  }

  return result;
}

console.log(repeat('abc', 1)); // "abc"
console.log(repeat('abc', 2)); // "abcabc"
console.log(repeat('abc', -1)); // undefined
console.log(`"${repeat('abc', 0)}"`); // ""
console.log(repeat('abc', 'a')); // undefined
console.log(repeat('abc', false)); // undefined
console.log(repeat('abc', null)); // undefined
console.log(repeat('abc', '  ')); // undefined
