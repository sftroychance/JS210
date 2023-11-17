// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first letter
// of the word, and the list should be ordered from shortest to longest.

// P: given a string, return all substrings of that string that begin with first
//    letter, sorted by length
// questions: wrong arity or type? include non-alphanumerics?
// E: given, empty string
// D: array: reduce
// A: define function leading substrings that takes one param - str
//    - split str into chars
//    - map over chars with idx
//      - return arr.slice(0, idx + 1)
//    - map over subarrays
//      - return subarray.join('')
//    - return array (should be sorted by length already)

function leadingSubstrings(str) {
  return Array.from({length: str.length})
    .map((_, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(leadingSubstrings(''));         // []
