// Log all even numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.

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

console.log('I will print all even numbers in a given range');
const start = getInput('Enter the start value: ');
const end = getInput('Enter the end value: ');

let counter;

if (start <= end) {
  counter = Math.ceil(start);

  while (counter <= end) {
    if (counter % 2 === 0) {
      console.log(counter);
      counter += 2;
    } else {
      counter += 1;
    }
  }
} else if (end < start) {
  counter = Math.floor(start);

  while (counter >= end) {
    if (counter % 2 === 0) {
      console.log(counter);
      counter -= 2;
    } else {
      counter -= 1;
    }
  }
}


