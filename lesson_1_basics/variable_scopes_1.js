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
console.log(a);

//

function hello() {
  let a = 'hello';
}

hello();
console.log(a);

//

console.log(a);

var a = 1;

//

console.log(a);

let a = 1;

//