// Write a function that takes a string as an argument and returns an array that
// contains every word from the string, with each word followed by a space and
// the word's length. If the argument is an empty string or if no argument is
// passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a
// single space.

// P: Given a string, return an array of strings, each of which contains a word
//    from the original string and its length, an empty array if an empty
//    string or no argument
//  inference: order of words output should be same as input string order; keep
//    punctuation connected to words
//  questions: other than sending no argument, other accommodations for
//        arity/type? duplicates?
// E: given, including empty string and no argument
// D: array: map
// A:
//  - declare function wordLengths, 1 param -> str
//  - split the string into words
//  - map words array to word plus space plus word length
//  - return this array

function wordlengths(str) {
  return !str
    ? []
    : str.split(' ').map(word => `${word} ${word.length}`);
}


console.log(wordlengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordlengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordlengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordlengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordlengths(''));      // []
console.log(wordlengths());        // []
