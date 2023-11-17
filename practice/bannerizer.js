// Write a function that will take a short line of text, and write it to the
// console log within a box.

// P: A function that takes a short string and prints it within a box
//  input: string
//  output: log to console, no return value
//  questions: wrong data type or arity?
// E: empty string included
// D: array to build lines
// A:
//  define function logInBox that takes one argument - message
//  get length of inputString - lineLength
//  declare array to hold lines - printLines
//  build lines and append to array
//    horizBorder = '+- + '-' * lineLength + '-+'
//    emptyline = '| ' _ ' + ' ' * lineLength + ' |'
//    messageLine ='| ' + message + ' |'
//  copy array to reversed and delete first line
//  concat arrays
//  iterate over array and log each line

// revise to handle any size message (wrap)
// A:
// set constant for max line size
// set lineLength for max line size - 4
// split message into words array
// declare lines = ['']
// declare linesIdx = 0;
// iterate over words:
// if lines[lineIdx].length + word.length + 1 > lineLength
//   linesIdx += 1;
// lines[lineIdx] += word + ' '
// build printLines array as before but message line by line

function logInBox(message) {
  const maxLineSize = 80;
  let maxLineLength = Math.min(maxLineSize - 4, message.length);

  let lines = splitMessage(message, maxLineLength);

  let lineLength = Math.max(...lines.map(line => line.length));

  let printLines = [];
  printLines.push('+-' + '-'.repeat(lineLength) + '-+');
  printLines.push('| ' + ' '.repeat(lineLength) + ' |');


  lines.forEach((line) => {
    printLines.push('| ' + line + ' '.repeat(lineLength - line.length) + ' |');
  });

  printLines = [...printLines, ...printLines.slice(0, 2).toReversed()];

  printLines.forEach(line => console.log(line));
}

function splitMessage(message, maxLineLength) {
  const words = message.split(' ');
  let lines = [''];
  let lineIdx = 0;

  while (words.length > 0) {
    let currentWord = words.shift();
    if (lines[lineIdx].length + currentWord.length > maxLineLength) {
      lineIdx += 1;
      lines[lineIdx] = '';
    }
    lines[lineIdx] += currentWord + ' ';
  }
  return lines.map(line => line.trim());
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('a bb cccc ddd'.repeat(80));
