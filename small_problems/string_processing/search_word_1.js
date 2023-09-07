// Write a function that takes two arguments, a word and a string of text, and
// returns an integer representing the number of times the word appears in the
// text.

// You may assume that the word and text inputs will always be provided, and
// that all word breaks are spaces. Thus, some words will include punctuation
// such as periods and commas.

// - just a pattern match?

function searchWord(searchString, text) {
  const re = new RegExp('\\b' + searchString + '\\b', 'gi');

  return text.match(re)?.length ?? 0;
}

let text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // should return 4, NOT 13

text = 'hi there hi! how are you hi.';
console.log(searchWord('hi', text));
console.log(searchWord('missing', text));
