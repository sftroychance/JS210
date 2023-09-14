// Write a function that displays an 8-pointed star in an nxn grid, where n is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when n is 7).

// P: input: integer (width)
//    output: log to display
//    - an 8-pointed star with equal width and height
//    - the center line is width of all '*'
//    - from top to center, the formula for spaces and '*' is
//      - between = ((width - 3) / 2) - index
//      - (' ' * idx) + '*' + (' ' * between) + '*'
//          + (' ' * between) + '*' + (' ' * idx)
//      - OR pad = ' ' * idx
//           stars = [...'***'].join(' ' * between)
//      - line = pad + stars + pad

// E: below

// D: array to contain lines to be logged

// A:
//  - declare function star that takes one parameter -> size
//  - declare array to contain lines to be logged -> result
//  - loop Math.floor(width / 2) times -> idx
//    - use formula above to calculate line and append to result
//  - set lower half of star to reversed result array
//  - append to result array '*' * width
//  - append lower half of star to result array
//  - iterate over result array and log each line

function star(size) {
  if (size < 7) return;

  const MARK = '*';

  const calculateLine = (_, idx) => {
    const pad = ' '.repeat(idx);

    const between = ((size - 3) / 2) - idx;
    const marks = [...MARK.repeat(3)].join(' '.repeat(between));

    return pad + marks + pad;
  };

  let starTop = Array.from({ length: size / 2 }, calculateLine);

  starTop
    .concat(MARK.repeat(size))
    .concat(starTop.toReversed())
    .forEach(line => console.log(line));
}

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(7);
star(0);
star(-5);
