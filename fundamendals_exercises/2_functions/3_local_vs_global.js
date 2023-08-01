// what does this code log and why?

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar); // 'This is local'

// myVar is declared at the top level. someFunction() has access to that
// variable and reassigns it to a new value, which is what is logged.