// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345', // note the space in 'prop 3'
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

let y = 'prop 3';
console.log(myObject[y]);

console.log(myObject[prop2]); // '678' -> myObject['456']
console.log(myObject.prop2); // '456'
console.log(myObject);

// Here is another example. What do you think will be logged to the console
// this time, and why?

const myFunc = function () {
  return 'funcProp';
};
// const myFunc = () => 'funcProp';
const myObj = {};
myObj[myFunc()] = 'hello, ';

// function myFunc() {
//   return 'funcProp';
// }

console.log(myObj); // { funcProp: 'hello, ' }
myObj[myFunc()] = 'world!';
console.log(myObj); // { funcProp: 'world' }

myObj[myFunc] = 'assigned to object';
console.log(myObj); // the full function definition becomes a string key:
// {
//   funcProp: 'world!',
//     "function myFunc() {\n  return 'funcProp';\n}": 'assigned to function'
// }

// note different value used for the key if myFunc is an arrow function:
// { funcProp: 'world!', "() => 'funcProp'": 'assigned to function' }

// and when it is a function expression:
// {
//   myFunc: 'world!',
//   "function() {\n  return 'myFunc';\n}": 'assigned to function'
// }

// Of course, in both these cases, the arrow function or function expression
// must be defined before the first function call. In both cases, the key is
// a string of everything that appears after the assignment operator where
// the arrow function or function expression is defined.
