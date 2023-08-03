// Write a function that takes two strings as arguments, determines the
// length of the two strings, and then returns the result of concatenating
// the shorter string, the longer string, and the shorter string once
// again. You may assume that the strings are of different lengths.

function shortLongShort(str1, str2) {
  const [short, long] = [str1, str2].sort((a, b) => a.length - b.length);

  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz')); // "xyz"
