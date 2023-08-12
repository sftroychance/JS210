// The doubler function in the code below takes two arguments: a number to
// double and return, and a string containing the name of the function's
// caller.
// Write a makeDoubler function that takes a caller name as an argument, and
// returns a function that has the same behavior as doubler, but with a
// preset caller.

// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

function makeDoubler(caller) {
  return (number) => {
    console.log(`This function was called by ${caller}`);
    return number * 2;
  };
}

// doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.

console.log(makeDoubler('Victor')(5)); // identical to previous line
// makeDoubler('Victor') returns a function, and then (5) is the argument
// list for that returned function

// partial function application - returns a function that calls another
// function with fewer arguments
// This works because the returned function includes a closure that can
// access 'caller' as declared in the parameter list
// `bind()` is not an option here because the fixed argument is not the
// first argument to be sent to the original function