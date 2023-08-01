// what does this log and why?

logValue();

function logValue() {
  console.log('Hello, world!'); // 'Hello, world'
}

// the entire function definition is hoisted, so calling the function is
// valid before its appearance in the code.

// what about this code?
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // string

// the function is hoisted above variable declarations.  Then the variable
// is declared with var, which is actually ignored. But then logValue is
// reassigned to a new String value, so it no longer points to the function.
// The string value is what is reflected in the logged result.

// equivalent hoisted code:

function logValue() {
  console.log('Hello, world!');
}

var logValue; // actually ignored - logValue is not assigned to undefined

logValue = 'foo'; // but logValue is reassigned to this string value

console.log(typeof logValue); // 'foo' is a string