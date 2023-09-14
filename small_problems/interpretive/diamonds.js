// Note: We did this problem recently, so I'm not coming to it cold

// Write a function that displays a four-pointed diamond in an nxn grid, where n
// is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// P: input: an odd integer -> diamondSize (assume valid argument)
//    output: a diamond logged to the console

// E: below, edge case 0

// D: array to hold lines to print

// A:
// - declare function that takes one parameter -> diamondSize
// - declare result array to hold lines to be logged to console
// - loop 1 up to diamondSize, increment by 2 each loop -> idx
//   - calculate pad (spaces to print before first *) ->
//    floor(diamondSize / 2) - idx
//   - append to result array: pad + ('*' repeat idx)
// - copy result array, pop last value, and reverse it; concat result to this
// array
// - log all the lines of the array

// alt approach:
//  - initialize array of odd numbers up to and including diamondSize
//  - map array to
//    - pad (floor(diamondSize - value / 2)) * ' ' + '*' * value
//  - log all lines of array

function diamond(diamondSize, hollow = false) {
  let result = Array(Math.ceil(diamondSize / 2))
    .fill(null)
    .map((_, idx) => (idx * 2) + 1)
    .map(stars => {
      let pad = (diamondSize - stars) / 2;
      return ' '.repeat(pad) + '*'.repeat(stars);
    });

  if (hollow) result = result.map(str => str.replace(/(?<=\*)\*(?=\*)/g, ' '));

  result = result.concat(result.toReversed().slice(1));
  result.forEach(str => console.log(str));
}

const hollowDiamond = (diamondSize) => diamond(diamondSize, true);

diamond(1);
diamond(3);
diamond(5);
diamond(9);
diamond(0);

hollowDiamond(9);
hollowDiamond(3);
