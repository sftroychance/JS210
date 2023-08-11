// Identify the bug in the following code. Don't run the code until after
// you've tried to answer.

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a]; // with bracket notation, a non-numeric key must be in quotes
myObject.a;

// Raises ReferenceError because JS is looking for a variable `a`. We can
// use numeric keys in brackets because JS calls Number.prototype.toString()
// to convert it.  Note that dot notation works fine because it does not
// require quotes and also you cannot use a variable with dot notation.