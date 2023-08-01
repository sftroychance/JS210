// Write a function that iterates over the integers from 1 to 100,
// inclusive. For multiples of three, log "Fizz" to the console. For
// multiples of five, log "Buzz". For numbers which are multiples of both
// three and five, log "FizzBuzz". For all other numbers, log the number.

// P: function to iterate 1 to 100, log 'Fizz' if multiple of 3, 'Buzz' if
// multiple of 5, 'FizzBuzz' if multiple of both
// E: 1 to 100 inclusive
// D: loop
// A: - write function, no parameters
//    - loop 1 to 100
//      - if multiple of 3 log 'Fizz'
//      - if multiple of 5 log 'Buzz'
//      - if multiple of both log 'FizzBuzz'
//      - else log number

function fizzbuzz() {
  for(let counter = 1; counter <= 100; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log('FizzBuzz');
    } else if (counter % 3 === 0) {
      console.log('Fizz');
    } else if (counter % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(counter);
    }
  }
}

fizzbuzz();

function revFizzBuzz() {
  for(let counter = 1; counter <= 100; counter++) {
    let message = '';

    if (counter % 3 === 0) message += 'Fizz';
    if (counter % 5 === 0) message += 'Buzz';

    console.log(message || counter);
  }
}

revFizzBuzz();