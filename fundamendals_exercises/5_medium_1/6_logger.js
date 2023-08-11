// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The function logger() is hoisted in the debugIt() function; when logger
// is called, status has been initialized to the value.

// debugIt() called
// function logger hoisted
// const status (in temporal dead zone)
// const assigned to 'debugging'
// logger() called

// LEXICAL SCOPING: 'status' is available within inner scopes