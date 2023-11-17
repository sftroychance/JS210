/* eslint-disable max-lines-per-function */
// The following code demonstrates the Pomodoro technique. Although it seems to
// work in principle, it never prints the minute count from line 11. What is
// wrong?

// problem: on line 34 of the original code `var minutes = 0`
// the var declaration is being hoisted to the top of the pomodoro
// function, so at the start of the function (and throughout)
// the value of minutes is always undefined, until line 34, but
// then pomodoro() is called recursively, resetting minutes to undefined

// the fix was to remove the `var` keyword to reset the global variable
// `var` to 0; thus, minutes will have a value of 0 every time
// the pomodoro function is called.

// a better practice in this code would be to define the variables with
// let or const to avoid the hoisting issues; had that been the case here
// the `let minutes = 0` statement on line 34 would have resulted in
// an error because the `let` declaration would have been hoisted, and
// the error would come from invoking `minutes` earlier in the function
// before initialization. The error is more easily indicated this way.

// on a design note, it might be better, instead of having the recursive
// call to `pomodoro()`, to pull the top-level variables into the function
// (to remove them from the global object) and then run the remainder of the
// function in a loop (with a `break` when done). The pomodoro sessions are
// a repetitive task, and recursion is more suited to breaking a problem into
// subproblems

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  // var minutes = 0;
  minutes = 0;
  pomodoro();
}

pomodoro();
