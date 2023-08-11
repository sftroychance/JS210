// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next, you're
// going to reverse those functions.  You will learn more about converting
// strings to numbers by writing a function that takes a positive integer or
// zero, and converts it to a string representation.  You may not use any of
// the standard conversion functions available in JavaScript, such as String(),
// Number.prototype.toString, or an expression such as '' + number. Your
// function should do this the old-fashioned way and construct the string by
// analyzing and manipulating the number.

// A: - declare function integerToString with a numeric parameter 'number'
//    - declare and initialize DIGIT_CHARS array ['0', etc.]
//    - if number is 0 return '0'
//    - initialize string 'result' to '';
//    - loop while number > 0
//      - result += DIGIT_CHARS[number % 10]
//      - result /= 10
//    - return result

function integerToString(number) {
  const DIGIT_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // if (number === 0) {
  //   return '0';
  // }

  let result = '';

  // while (number > 0) {
  //   result = DIGIT_CHARS[number % 10] + result;
  //   number = parseInt(number / 10);
  // }

  do {
    result = DIGIT_CHARS[number % 10] + result;
    number = Math.floor(number / 10);
  } while (number > 0);

  return result;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"

// above, can refactor the while loop to a do/while (so `if (number === 0)`
// is not necessary) and also can use Math.floor instead of parseInt