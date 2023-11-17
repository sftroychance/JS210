// Given a sentence with numbers representing a word's location embedded within
// each word, return the sorted sentence.

// P: input: string
//    output: sorted sentence
//    each word has an embedded number, which is the order of word in sentence
//    clarifying questions:
//    - if argument is not a string?
//    - if arity doesn't match?
//    - will all words have a digit? what to do if not?
//    - will all words have unique digit? what if not?
//    - can a word have more than one digit? repeat it in both places?
// E: given
// D: array - map
// A:
//  - declare function rearrange that takes one param -> string
//  - split string into words array
//  - map words array
//    - get digit from string
//    - replace digit in string with ''
//    - return [digit, string]
//  - sort words array by digit
//  - map words array to string only
//  - join with space

function rearrange(string) {
  const words = string
    .trim()
    .split(' ');

  if (words.length === 0) return '';

  return words
    .map(word => {
      let match = word.match(/\d+/);
      if (match) return [match[0], word.replace(match, '')];
      return '';
    })
    .sort((a, b) => a[0] - b[0])
    .map(subarr => subarr[1])
    .join(' ');
}

console.log(rearrange("is2 Thi1s T4est 3a")); // "This is a Test"
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); //➞ "For the good of the people"
console.log(rearrange(" ")); //➞ ""
