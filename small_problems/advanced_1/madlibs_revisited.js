// Build a madlibs program that takes a text template as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the text
// and return the result.

// P: Given a template and sets of words for different parts of speech, randomly
//    insert words into marked portions of the template.
// clarifications: wrong arity/type?
// E: given
// D: string (replace)
// A: approach is to create a function that sets the words for each part of
//    speech and return the madlibs function, allowing new madlibs versions
//    to be created with custom word sets.
// declare function madlibsGenerator, 4 params (adverbs, adjectives,
//    verbs, nouns)
// - declare an object to contain array for each part of speech -> POS
// - return a function expression -> madlibs, 1 param -> template
//   - define a regex to identify template 'blanks' to replace with words
//      - capture group to get the POS type
//   - define a replacement callback function to use with
//      String.prototype.replace() -> replacer
//     - select a value at random from the array for the indicated POS
//   - call `replace(re, replacer) on the template
//   - return result

function madlibsGenerator(adverbs, adjectives, verbs, nouns) {
  const POS = {
    ADV: adverbs,
    ADJ: adjectives,
    VERB: verbs,
    NOUN: nouns,
  };

  return function madlibs(template) {
    const re = /<(\w+)>/g;
    const replacer = (_, x) => {
      return POS[x][Math.floor(Math.random() * POS[x].length)];
    };

    return template.replace(re, replacer);
  };
}

const adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];
const adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
const verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
const nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];

const madlibs = madlibsGenerator(adverbs, adjectives, verbs, nouns);

let template1 = 'The <ADJ> brown <NOUN> <ADV> <VERB> the <ADJ> yellow <NOUN>, who <ADV> <VERB> his <NOUN> and looks around';

let template2 = 'The <NOUN> <VERB> the <NOUN>\'s <NOUN>';

console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));
