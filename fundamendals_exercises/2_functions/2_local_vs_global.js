// what will the following log and why?

var myVar = 'This is global'; // d: function v: global

function someFunction() {
  var myVar = 'This is local'; // d: function v: local(function)
  console.log(myVar); // 'This is local'
}

someFunction();

// myVar in someFunction() shadows the global variable myVar defined in
// top-level scope.