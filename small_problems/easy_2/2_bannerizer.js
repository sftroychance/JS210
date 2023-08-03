// Write a function that will take a short line of text, and write it to
// the console log within a box.

// one blank space/row between text and border
// border chars: + corners, - horizontal, | vertical

// A: - declare function that takes a parameter - text
//    - declare horizBorder = '+' + '-'.repeat(text.length + 2) + '+'
//    - declare blankLine = '|' + ' '.repeat(text.length + 2) + '+'
//    - log horizBorder
//    - log blankLine
//    - log '| ' + text + ' |'
//    - log blankLine
//    - log horizBorder

// function logInBox(text) {
//   const CORNER = '+';
//   const HORIZ_LINE = '-';
//   const VERT_LINE = '|';
//
//   const horizBorder = CORNER + HORIZ_LINE.repeat(text.length + 2) + CORNER;
//   const blankLine = VERT_LINE + ' '.repeat(text.length + 2) + VERT_LINE;
//   const textLine = `${VERT_LINE} ${text} ${VERT_LINE}`;
//
//   console.log(horizBorder);
//   console.log(blankLine);
//   console.log(textLine);
//   console.log(blankLine);
//   console.log(horizBorder);
// }

// further exploration:
//   - 2nd parameter for max width of the box
//   - wrap text if too long for one line
// A (adjustments):
//  - add 2nd parameter maxBoxWidth
//

function wrapText(text, lineWidth) {
  if (text.length <= lineWidth) {
    return [text];
  }

  const words = text.split(' ');
  const lines = [''];
  let lineIndex = 0;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    if (lines[lineIndex].length + word.length <= lineWidth) {
      lines[lineIndex] += `${word} `;
    } else {
      lineIndex += 1;
      lines[lineIndex] = `${word} `;
    }
  }

  return lines.map((line) => line.trim())
    .map((line) => line.padEnd(lineWidth));
}

function logInBox(text, requestedBoxWidth = null) {
  const BOX_WIDTH_LIMIT = 80;
  const CORNER = '+';
  const HORIZ_LINE = '-';
  const VERT_LINE = '|';

  let boxWidth;
  if (requestedBoxWidth < 5 || requestedBoxWidth === null) {
    boxWidth = text.length + 4;
  }
  boxWidth = Math.min(boxWidth, BOX_WIDTH_LIMIT);

  const outputBox = [];
  const horizBorder = CORNER + HORIZ_LINE.repeat(boxWidth - 2) + CORNER;
  const blankLine = VERT_LINE + ' '.repeat(boxWidth - 2) + VERT_LINE;

  const wrappedText = wrapText(text, boxWidth - 4);

  outputBox.push(horizBorder);
  outputBox.push(blankLine);

  for (let i = 0; i < wrappedText.length; i += 1) {
    outputBox.push(`${VERT_LINE} ${wrappedText[i]} ${VERT_LINE}`);
  }

  outputBox.push(blankLine);
  outputBox.push(horizBorder);

  for (let i = 0; i < outputBox.length; i += 1) {
    console.log(outputBox[i]);
  }
}

logInBox('To boldly go where no one has gone before.', 15);
logInBox('To boldly go where no one has gone before.', 20);
logInBox('');
logInBox('hello');

let longText = 'The string to pad the current str with. If padString is too' +
  ' long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).';
logInBox(longText, 30);
logInBox(longText);
