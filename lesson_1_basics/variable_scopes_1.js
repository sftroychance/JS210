// Explain the output of each of these programs

// 1
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); //outer

// variable `a` is declared and initialized to 'outer' - declared scope:
// block, visible scope: global
// console.log(a) logs the value 'outer'
// testscope() invokes function, where local variable `a` is declared, which
// shadows the `a` in outer scope - declared scope: block, visible scope:
// local(function)
// console.log(a) within testScope() logs value 'inner'
// console.log(a) in outer scope logs 'outer'

// 2
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // inner

// in function testScope, the outer-scoped variable `a` is reassigned to `inner`

// 3
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); // empty

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket); // play station
  };

  shop1();
  shop2();
  shop3();

  console.log(basket); // computer
}

goShopping();

// hoisting occurs but is not an issue
// `basket` is declared and initialized - declared scope: block, visible
// scope: local
// function `goShopping()` is invoked
// console.log(basket) -> 'empty' - basket is the global variable
// function shop1() invoked -> global variable `basket` reassigned to `tv`
// function referenced by shop2 invoked -> global variable `basket`
// reassigned to `computer`
// function referenced by shop3 invoked -> local variable `basket` declared
// and initialized - declared scope: block, visible scope: local (function)
// in shop3: console.log(basket) - logs value of local `basket`, which is `play
// station`
// in goShopping: console.log(basket) invoked - global variable `basket` has
// value of `computer`, so that is what is logged

function hello() {
  a = 'hi';
}

hello();
console.log(a); // 'hi'

// hoisting is not an issue here
// function hello() is invoked, within which variable `a` is assigned the
// value of `hi`; there is no declaration statement for `a`, so when it is
// assigned a value it is added as a property on the global object--a global
// variable.

function hello() {
  let a = 'hello';
}

hello();
console.log(a); // ReferenceError - a is not defined

// function hello() is invoked, and variable `a` is declared with `let`,
// which has declared: block, visible: local(function) scope. Because `a` is
// scoped to the function, it is not available at the top level, so when it
// is referenced on the last line, it cannot be accessed and is not defined
// for that scope

console.log(a); // undefined

var a = 1;

// hoisting is involved. `var a` is hoisted, so `a` is assigned the value
// `undefined`, but the assignment to value 1  is not hoisted. So when
// logged, `a` has a value of `undefined`.

console.log(a); // Reference Error - a not initialized

let a = 1;

// hoisting is involved. `let a` is hoisted, and the value of `a` is not
// set--temporal dead zone. When logged, `a` has no value, so this attempt will
// result in a ReferenceError.

console.log(a); // ReferenceError - a is not defined

function hello() {
  a = 1;
}

// hoisting occurs but is not the cause of the ReferenceError; function
// hello() is never actually invoked, so `a` is not set as a global variable.
