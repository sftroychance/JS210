// Write a function that selects all words that have all the same vowels (in any
// order and/or number)); // as the first word, including the first word.

// Words will contain only lowercase letters, and may contain whitespaces.
// Frequency does not matter (e.g. if the first word is "loopy", then you can
// include words with any number of o's, so long as they only contain o's, and
// not any other vowels)); //.

// P: input: array of words
//    output: array with first word and other words in array with same vowels
//    rules: frequency does not matter
//           word can contain spaces
//           only lowercase letters
//    clarifying questions:
//    - arity?
//    - will all elements be strings?
//    - if arg is not an array?
// E: given
// D: arrays for sorting, string matching
// A:
//  - declare function sameVowelGroup that takes one param -> strings
//  - map strings
//    - save orig string
//    - replace non-vowels with ''
//    - split along ''
//    - get rid of uniq values (use Set)
//    - sort array
//    - join
//    - return [joined string, orig string]
//  - filter strings where joined strings match first joined value
//  - map to orig string
//  - return result

function sameVowelGroup(strings) {
  const RE_NON_VOWELS = /[^aeiou]/g;

  let vowelsAndStrings = strings
    .map(str => {
      let vowels = str.replace(RE_NON_VOWELS, '');
      vowels = Array.from(new Set(vowels)).sort().join('');
      return [vowels, str];
    });

  const targetVowels = vowelsAndStrings[0]?.[0] ?? '';

  return vowelsAndStrings
    .filter(([vowels, _]) => vowels === targetVowels)
    .map(([_, str]) => str);
}

console.log(sameVowelGroup(["toe", "ocelot", "maniac"])); // ➞ ["toe", "ocelot"]
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ➞ ["many"]
console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); // ➞ ["hoops", "bot", "bottom"]
console.log(sameVowelGroup(["", "chuff", "bot", "bottom"])); // ['']
console.log(sameVowelGroup(["", '', 'prndl', "chuff", "bot", "bottom"])); // ['', '', 'prndl']
console.log(sameVowelGroup(["apple"])); // ['apple']
console.log(sameVowelGroup([])); // []
