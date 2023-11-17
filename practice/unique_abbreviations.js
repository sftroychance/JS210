// You are given two inputs:

// An array of abbreviations.
// An array of words.
// Write a function that returns true if each abbreviation uniquely identifies a
// word, and false otherwise.

// P: input: two arrays -> abbreviations, words
//    output: boolean
//    does each abbreviation uniquely identify a word?
//    - e.g., does only one word in the given list start with the substring
//   clarifying questions I would ask:
//    - what if either array is empty? return false or undefined?
//    - are the arrays necessarily the same sizes?
//    - can the arrays include non-string values (e.g., need to validate?)
//    - will input always be in lowercase?
//    - what if there are extra arguments, or not enough?
// E: given
// D: strings: substring, startsWith; array: filter, every
// A:
//  - declare function uniqueAbbrev that takes 2 params -> abbreviations, words
//  - iterate over abbreviations (every?)
//    - map words array to those that match the abbreviation
//    - get length of the array - return false if length is not === 1

function uniqueAbbrev(abbreviations, words) {
  if (abbreviations.length === 0 || words.length === 0) return false;

  return abbreviations.every(abbrev => {
    return words.filter(word => word.startsWith(abbrev)).length === 1;
  });
}

console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])); // false
console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"])); // true
console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"])); // false
console.log(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"])); // true
console.log(uniqueAbbrev(["mo", "ma", "me"], [])); // false
console.log(uniqueAbbrev([], ["moment", "many", "mean"])); // false
console.log(uniqueAbbrev(["s", 'sta', 'st', "t", 'te', "v"], ["stamina", "television", "vindaloo"])); // true
