// Write a function logMultiples that takes one argument number. It should
// log all multiples of the argument between 0 and 100 (inclusive) that
// are also odd numbers. Log the values in descending order.
//
// You may assume that number is an integer between 0 and 100.
// P: A function that takes one parameter, log all multiples of that number
// 0 to 100 that are odd numbers; log in descending order.
// E: it says 0 inclusive, but don't include 0
// D: loop
// A: - write function that takes one parameter, number
//    - loop 100 to 1 with counter
//    - if counter % number === 0 log number

function logMultiples(number) {
  for (let counter = 100; counter > 0; counter -= 1) {
    if (counter % 2 === 1 && counter % number === 0) console.log(counter);
  }
}

logMultiples(17);
logMultiples(21);

function highestMultiple(number, max) {
  return Math.floor(max / number) * number;
}

function revLogMultiples(number) {
  const max = 100;
  const maxMultiple = highestMultiple(number, max);

  for (let candidate = maxMultiple; candidate >= number; candidate -= number) {
    if (candidate % 2 === 1) console.log(candidate);
  }
}

revLogMultiples(17);
revLogMultiples(21);

function rangeLogMultiples(number, min, max) {
  const maxMultiple = highestMultiple(number, max);

  for (let candidate = maxMultiple; candidate >= min; candidate -= number) {
    if (candidate % 2 === 1) console.log(candidate);
  }
}

rangeLogMultiples(17, 3, 150);
rangeLogMultiples(21, 25, 300);
