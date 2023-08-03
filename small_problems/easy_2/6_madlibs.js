// Madlibs is a simple game where you create a story template with "blanks"
// for words. You, or another player, then construct a list of words and
// place them into the story, creating an often silly or funny story as a
// result.
//
// Create a simple madlib program that prompts for a noun, a verb, an
// adverb, and an adjective, and injects them into a story that you create.

// A: - declare object with keys for noun/verb/adverb/adjective - words
//    - for each key in words
//      - prompt user to enter a word
//      - save word as value for that key in words
//    - declare story string and initialize with words inserted
//    - log story string

const input = require('readline-sync');

const words = { noun: '', verb: '', adverb: '', adjective: ''};

for (const wordType in words) {
  const re = /[aeiou]/;
  const article = wordType[0].match(re) ? 'an' : 'a';

  words[wordType] = input.question(`Enter ${article} ${wordType}: `);
}

const story = `On YouTube I saw the ${words.adjective} ${words.noun}`
  + ` ${words.verb} ${words.adverb}!`;

console.log(story);
