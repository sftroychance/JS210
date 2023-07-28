// Go over the following program. What does it log to the console at output
// lines. Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // expected 'Hello'
}
// myBoolean value is true, so the conditional is true -> if condition executes

if (!myString) {
  console.log('World'); // expected will not print
}
// myString is a truthy value - negating that makes the conditional false
// -> if condition will not execute

if (!!myArray) {
  console.log('World'); // expected 'World'
}
// myArray value is truthy - !! casts that to a Boolean with value of true
// -> if condition executes
// an empty array is not on the list of what evaluates to false

if (myOtherString || myArray) {
  console.log('!'); // expected '!'
}
// myOtherString is falsy, but myArray is truthy -> conditional is true
// and if condition executes


