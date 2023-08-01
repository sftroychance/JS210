// What will the following code log to the console and why

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar); // 'This is global'

// myVar in someFunction() defines a new myVar with function scope; its
// assignment does not affect the global variable myVar