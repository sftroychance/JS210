// what does this code log and why?

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // 'This is global'
console.log(global.myVar); // 'This is global'

// using a variable without a declaration (let/const/var) will create a
// variable that is global in scope and will add a property to the global
// object. This is true no matter where the variable is created. note: JS
// first checks current scope then up through global scope, then creates the
// global property.

