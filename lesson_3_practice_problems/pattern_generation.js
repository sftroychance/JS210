// Write a function that takes a number of rows as the argument nStars and
// logs a square of numbers and asterisks. For example, if nStars is 7,
// log the following pattern:
//
// generatePattern(7);
//
// // console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
//
// You may assume that nStars is greater than 1 and less than 10.

// A: - write function that takes one parameter nStars
//    - loop counter = 1 to nStars
//      - stars = '*'.repeat(nStars - counter)
//      - declare output and initialize to ''
//      - loop digit = 1 to counter
//        - append digit to output
//      - append stars to output
//      - log output

function generatePattern(nStars) {
  for(let line = 1; line <= nStars; line++) {
    let output = '';

    for (let digit = 1; digit <= line; digit++) {
      output += String(digit);
    }

    for (let star = line + 1; star <= nStars; star++) {
      output += '*'.repeat(String(star).length);
    }

    console.log(output);
  }

  console.log();
}

generatePattern(1);
generatePattern(7);
generatePattern(9);
generatePattern(10);
generatePattern(20);
generatePattern(30);
