// predict output and explain:

// 1
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a); // undefined
}

say();

// at the top level, function say() definition occurs before invocation (so
// hoisting is not necessary); when `say()` is invoked, a new execution
// context is created within the function, where `var a` is hoisted, so `a`
// is given a value of undefined. The `if` statement never executes, so a
// does not get reassigned. Therefore, when logged, `a` has a value of
// `undefined`. (`a` has declared: function, visible: local(function)
// scope)


// 2
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say(); // ReferenceError - a not defined

// in `say()`, the `if` statement never executes. `let a` is hoisted within
// the if block, but it doesn't matter here because `a` is scoped to the
// block. Therefore, logging `a` will result in a ReferenceError. (note: a
// function creates a new execution context, but a block does not).

// 3
function hello() {
  a = 'hello'; // a is undefined but declared before this
  console.log(a); // 'hello'

  if (false) {
    var a = 'hello again'; // `var a` is hoisted to top of function
  }
}

hello();
console.log(a); // ReferenceError - a is not defined

// hoisting is involved here. at the `hello()` execution context, `var a` is
// hoisted, and at that point `a` is set as undefined. Then a is reassigned
// to `hello` and that is what is logged within the function. The `if`
// statement never executes. `a` is scoped declared: function, visible:
// local(function). Attempting to log the value of `a` after the function is
// invoked will result in a ReferenceError because `a` is scoped to the
// function and is not available in the outer scope.

// 4

function hello() {
  a = 'hello'; // `let a` is not hoisted, so `a` is set as a global variable
  console.log(a); // 'hello'

  if (false) {
    let a = 'hello again'; // block scope so not hoisted in function scope
  }
}

hello();
console.log(a); // 'hello'

// hoisting is not an issue here.
// In the execution context for `hello()`, `a` is scoped d: block, v:
// local(block); it is not hoisted within the function. Therefore when `a`
// is assigned the value `hello`, this creates a property on the global
// object. The value is `a` is logged within `hello()` as 'hello'. At
// top-level scope, the value of `a` is logged as 'hello' since it is a
// global variable.

// 5
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a); // 4

// both `var a` declarations are hoisted (the second ignored), then `a` is
// assigned `hello`. Within the `for` loop, a is repeatedly reassigned, with
// a final value of `4`, which is logged.

// 6

let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a); // 'hello'

// hoisting is not an issue here. my initial expectation was that an error will
// occur because the `let a` declaration gets repeated, but in actuality
// every iteration of the loop creates a new lexical context for that
// iteration of the block. in the `for` loop, `a` has scope d: block, v:
// local(block), so a new `a` is declared and then destroyed with each loop.
// In top-level scope, `a` retains the value of `hello` because `a` within
// the `for` loop has block scope, so that is what is logged.

// 7

let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo()); // 4
console.log(a); // 3

// hoisting is not an issue at top-level scope--the function definition is
// hoisted, but this has no unusual effect here. `a` is scoped d: block, v:
// global. When `foo()` is invoked, a new execution context is created, and
// `let bar` is hoisted (d: block, v: local(function)), but its assignment
// is not (but this has no unusual hoisting effect). global variable `a` is
// reassigned to `2`; when `bar()` is  invoked, global variable `a` is
// reassigned to `3` and `4` is returned from the function, so that is what is
// logged; then `3` is logged for global variable `a`.

// 8

var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope()); // 'superNested'
console.log(a); // 'global'

// important note: my first instinct was that `var a = 'nested'` would be
// hoisted to the top of the `checkScope()` function, but function
// expressions and arrow functions do indeed create their own execution
// context, so that is not the case. Therefore, as explained in the LS
// solution, all the `var a` declarations here are within their own scope.
// Hoisting does not create any unusual behavior here.

// 9

let a = 'outer';
let b = 'outer';

console.log(a); // 'outer'
console.log(b); // 'outer'
setScope(a);
console.log(a); // 'outer'
console.log(b); // 'inner'

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// function `setScope()` is hoisted, so there is no error when it is invoked.
// `b` is declared at top level, so its visibility is global; therefore, it
// is accessible within `getScope()` so is reassigned within that function.
// `foo` is irrelevant here--`a` is sent as an argument, but `foo` is a
// local variable within `setScope()` and its reassignment does not affect `a`.

// 10

let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total); // 50
incrementBy(10);
console.log(total); // 60
console.log(increment); //15

// hoisting is not an issue here.
// in `incrementBy()`, `increment` is a local variable that shadows global
// variable `increment`, and global variable `total` is reassigned. global
// variable `increment` is never reassigned.

// 11

let a = 'outer';

console.log(a);
setScope(); // TypeError - setScope is not a function
console.log(a);

var setScope = function () {
  a = 'inner';
};

// hoisted code:
var setScope; // value 'undefined'
let a;

a = 'outer';

console.log(a); // 'outer'
setScope(); // Error - SetScope is not a function (it is still 'undefined')

// Hoisting is relevant here. `var setScope` is hoisted but its assignment
// is not, so `setScope` has a value of undefined when `setScope()` is invoked