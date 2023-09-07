// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first letter
// of the word, and the list should be ordered from shortest to longest.

// a:
// - split string into char array
// - map to substring values
//    - slice(0, idx)
// - return array

function leadingSubstrings(str) {
  return str
    .split('')
    .map((_, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
