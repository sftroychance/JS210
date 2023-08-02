// Log all odd numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.

// revised solution allows user to enter range
// if start value is greater than end value, will log in descending order
const rlSync = require('readline-sync');

function getInput(message) {
  let value;
  do {
    value = Number(rlSync.question(message));

    if (Number.isNaN(value)) {
      console.log('Please enter a valid number.');
    }
  } while (Number.isNaN(value));

  return value;
}

console.log('I will print all odd numbers in a given range.');
const start = getInput('Enter the start value: ');
const end = getInput('Enter the end value: ');

let counter;

if (start <= end) {
  counter = Math.ceil(start);

  while (counter <= end) {
    if (Math.abs(counter % 2) === 1) {
      console.log(counter);
    }

    counter += 1;
  }
} else if (end < start) {
  counter = Math.floor(start);

  while (counter >= end) {
    if (Math.abs(counter % 2) === 1) {
      console.log(counter);
    }

    counter -= 1;
  }
}

// initial solution
// for (let counter = 1; counter <= 99; counter += 1) {
//   if (counter % 2 === 1) {
//     console.log(counter);
//   }
// }
