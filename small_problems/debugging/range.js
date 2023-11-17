// We are assigned the task to implement a range function that returns an array
// of integers beginning and ending with specified start and end numbers. When
// only a single argument is provided, that argument should be used as the
// ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?

// A couple issues:
// function range is defined twice, so the second definition replaces the first
// the second definition recursively calls itself
// we can't define different functions of the same name with different
// signatures in JS

// the solution: delete the second definition and redefine
// the first to handle just an end value.
// A logical move here would be to set the default value for start as 0
// but to do so we would have to reverse the order of the parameters
// in the function definition, and this would be confusing for
// setting a range to call range(end, start)
// So instead, if the end value is undefined, we can set the end value to
// the value of the argument sent for start, and then set start to 0

// note that in the first range function, there can be some confusion because
// the function name is shadowed within the function; it works, but it would
// be better to set the array name within the function to something else
// - this was done, chainging the variable name to 'result'

function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result = [];

  for (let element = start; element <= end; element++) {
    result.push(element);
  }

  return result;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));
console.log(range(-10, 0));
