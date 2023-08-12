// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five
// numbers.
const rlSync = require('readline-sync');

const NUMBERS_REQUESTED = 6;

function ordinalize(number) {
  if (number % 100 >= 10 && number % 100 < 20) {
    return `${number}th`;
  }

  switch (number % 10) {
    case 1: return `${number}st`;
    case 2: return `${number}nd`;
    case 3: return `${number}rd`;
    default: return `${number}th`;
  }
}

const responseArray = [];

for (let i = 1; i <= NUMBERS_REQUESTED; i += 1) {
  const iteration = i === NUMBERS_REQUESTED ? 'last' : ordinalize(i);

  const prompt = `Enter the ${iteration} number: `;
  const response = Number(rlSync.question(prompt));

  responseArray.push(response);
}

const searchValue = responseArray.pop();

const result = responseArray.includes(searchValue) ? 'appears in' : 'does'
  + ' not appear in';

const printArray = `[${responseArray.join(', ')}]`;
console.log(`The number ${searchValue} ${result} ${printArray}.`);

// Further exploration
// We can adjust this to determine if values in the array meet a particular
// condition (e.g., number > searchValue) by using
// `Array.prototype.some()`, which takes a callback function that needs to
// return true or false (or truthy/falsy value)
