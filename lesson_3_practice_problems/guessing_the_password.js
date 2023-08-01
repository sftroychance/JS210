//  Write a password guessing program that tracks how many times the user
//  enters the wrong password. If the user enters the password wrong three
//  times, log 'You have been denied access.' and terminate the program.
//  If the password is correct, log 'You have successfully logged in.'
//  and end the program.

const PASSWORD = 'secret';
const MAX_GUESSES = 3;

let logSuccess = () => console.log('You have successfully logged in.');
let logFailure = () => console.log('You have been denied access.');

let guesses = 0;

while (guesses < MAX_GUESSES) {
  let response = prompt("What is the password?");

  if (response === PASSWORD) {
    logSuccess();
    break;
  }

  guesses += 1;
}

if (guesses >= MAX_GUESSES) logFailure();