// In this exercise, you will write a program that asks the user for a
// phrase, then outputs the number of characters in that phrase.

const rlSync = require('readline-sync');
const phrase = rlSync.question('Enter a phrase: ');

const charCount = phrase.length;
// const nonSpaceCharCount = phrase.replace(/\s/g, '').length;
// const alphaCount = phrase.replace(/[^a-zA-Z]/g, '').length;

// note: better to use the i flag for case-insensitive matching
//const alphaCount = phrase.replace(/[^a-z]/gi, '').length;

// also: can define a regex literal
const nonSpace = /\s/g
const nonAlpha = /[^a-z]/gi
const nonSpaceCharCount = phrase.replace(nonSpace, '').length;
const alphaCount = phrase.replace(nonAlpha, '').length;

console.log(`There are ${charCount} characters in "${phrase}".`);
console.log(`There are ${nonSpaceCharCount} non-space characters in "${phrase}".`);
console.log(`There are ${alphaCount} alphabet characters in "${phrase}".`);