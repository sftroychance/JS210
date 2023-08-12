// Read through the code below and determine what will be logged. You may
// refer to the ASCII Table to look up character code values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // Welcome
    anotherOne(116, 111); // to
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // the
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33); // Matrix!

// What was confusing at first glance was the last line:
// one()(77 . . . )
// until seeing that one() returns a function, and then (77, ...) is the
// argument list for that returned function

// it would be the equivalent of:
// oneFunc = one();
// oneFunc(77, 97, ...)
