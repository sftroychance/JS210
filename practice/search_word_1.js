// Write a function that takes two arguments, a word and a string of text, and
// returns an integer representing the number of times the word appears in the
// text.

// You may assume that the word and text inputs will always be provided, and
// that all word breaks are spaces. Thus, some words will include punctuation
// such as periods and commas.

// P: given a string of text and a string containing a word, return integer
//    of number of times word appears in text; case insensitive per example
//  questions: word should not be part of another word? wrong type or arity?
// E: Given, empty strings added
// D: strings (regex match)
// A:
// - declare function searchWord, 2 params -> text, searchString
// - declare regex for word using regex constructor, use g and i modifiers
// - run match on the text to return array of matches or null if none
// - return number or 0 if null

function searchWord(searchString, text) {
  if (!searchString || !text) return 0;

  // note you have to escape \b or it will interpreted as backspace
  const re = new RegExp(`\\b${searchString}\\b`, 'gi');

  return text.match(re)?.length || 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('', text)); // 0
console.log(searchWord('howdy', 'hi there')); // 0
console.log(searchWord('', '')); // 0
