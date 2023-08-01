// what does this code log and why?

var myVar = 'This is global';

function someFunction() {
  console.log(myVar); // 'This is global'
}

someFunction();

// myVar is declared at top (global) scope and is available within all
// functions, so its value is logged within the function.

// key point: when a variable is referenced, JS will look for variable of
// that name in current scope and then will move up subsequent scopes until
// it is located.