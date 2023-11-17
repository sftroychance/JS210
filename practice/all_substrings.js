// Write a function that returns a list of all substrings of a string. Order the
// returned list by where in the string the substring begins. This means that
// all substrings that start at index position 0 should come first, then all
// substrings that start at index position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the
// previous exercise:

// P: return all substrings of string
// questions: wrong arity or type?
// E: given, added empty string
// D: array: map/flatMap
// A: define function substrings that takes one param - str
//    - define array of same length
//    - map with idx to str.slice(idx)
//    - flatmap to leadingSubstrings()
//    - return result

function leadingSubstrings(str) {
  return Array.from({length: str.length}, (_, idx) => str.slice(0, idx + 1));
  // .map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return Array.from({length: str.length}, (_, idx) => str.slice(idx))
    .flatMap(substr => leadingSubstrings(substr));
}

console.log(substrings('abcde'));
console.log(substrings(''));
