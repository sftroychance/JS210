// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string
// with all of the non-alphabetic characters replaced by spaces. If one
// or more non-alphabetic characters occur in a row, you should only
// have one space in the result (i.e., the result string should never have
// consecutive spaces).

// A: - declare function that takes a string parameter - string
//    - declare result string
//    - replace non-alpha characters with spaces and assign to result
//    - replace multiple spaces with single spaces and assign to result
//    - return result

function cleanUp(string) {
  // return string.replace(/[^A-Za-z]/g, ' ')
  //   .replace(/\s+/g, ' ');
  // OR
  // return string.replace(/[^A-Za-z]+/g, ' ');
  // OR
  return string.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
