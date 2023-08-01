// Write a function that logs the integers from 1 to 100 (inclusive) that
// are multiples of either 3 or 5. If the number is divisible by both 3
// and 5, append an "!" to the number.

// P: Function: given number, log multiples of 3 or 5 from 1 up to number
// inclusive; append '!' if number is divisible by both
// E:
// D: loop
// A: - write function, one positive integer parameter expected
//       - loop 1 to number
//         - if divis by 15, log number + !
//         - if divis by 3 or 5, log number

function multiplesOfThreeAndFive(number) {
  if (number < 0) return;

  for(let counter = 1; counter <= number; counter++) {
    if (counter % 15 === 0) {
      console.log(`${counter}!`);
    } else if (counter % 3 === 0 || counter % 5 === 0) {
      console.log(counter);
    }
  }
}

multiplesOfThreeAndFive(30);

function rangeMultiplesOfThreeAndFive(start, end) {
  if (end < start) return;

  for(let counter = start; counter <= end; counter++) {
    if(counter % 3 === 0 && counter % 5 === 0) {
      console.log(`${counter}!`);
    } else if (counter % 3 === 0 || counter % 5 === 0) {
      console.log(counter);
    }
  }
}

rangeMultiplesOfThreeAndFive(7, 35);
rangeMultiplesOfThreeAndFive(-15, 0);
rangeMultiplesOfThreeAndFive(35, 7);
