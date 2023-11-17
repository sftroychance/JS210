// Gemma and some friends are working on a complex program to generate word
// ladders, transforming one word into another word one character at a time. The
// smallest of her tasks is to print the resulting ladder to the screen.

// A "ladder" is simply an array of word strings; Gemma decides to transform
// this array into a single string where each word within the string is
// separated by a hyphen ('-'). For example, the array ['pig', 'pie', 'lie',
// 'lit', 'let'] should be printed as the string 'pig-pie-lie-lit-let'.

// Upon first glance, Gemma's code below looks like it should work. But it
// throws a TypeError, saying: Cannot read property 'forEach' of undefined. Why
// is that?

// original code:
let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// corrected code: The problem was with automatic semicolon insertion
// - semicolons added where appropriate
// detail: without a semicolon inserted, the first and third lines were 'joined'
// such that forEach was called on ''['head', 'heal', ...], which is undefined

let ladder = '';


['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
});

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail
