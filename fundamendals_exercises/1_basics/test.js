const rlSync = require('readline-sync');
const phrase = rlSync.question('Enter a phrase: ');

const nonSpace = /\s/g
const nonAlpha = /[^a-z]/gi

const charCount = phrase.length;
const nonSpaceCount = phrase.replace(nonSpace, '').length;
const alphaCount = phrase.replace(nonAlpha, '').length;

console.log(`There are ${charCount} characters in "${phrase}".`);
console.log(`There are ${nonSpaceCount} non-space characters in "${phrase}".`);
console.log(`There are ${alphaCount} alphabet characters in "${phrase}".`);
