// Write a function that takes a positive integer as an argument, and logs
// all the odd numbers from 1 to the passed in number (inclusive). All
// numbers should be logged on separate lines.
// P: write function, takes 1 number parameter (positive int), logs all odd
// numbers 1 to number inclusive, on separate lines
// E:
// D: none (loop)
// A: loop start at 1 add 2 every iteration, stop when loop counter > number
//      - log inside loop

// function logOddNumbers(number) {
//   for(counter = 1; counter <= number; counter += 2) {
//     console.log(counter);
//   }
// }

// alternative, with continue statement
function logOddNumbers(number) {
  for(let counter = 1; counter <= number; counter++) {
    if (counter % 2 === 0) continue;
    console.log(counter);
  }
}

logOddNumbers(19);