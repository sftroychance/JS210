// Write a function that takes two arguments:
// a string to be split
// a delimiter character
//
// The function logs the split strings to the console.
//
// You may use the square brackets ([]) to access a character by index (as
// shown below), and the length property to find the string length.
// However, you may not use any other properties or methods from
// JavaScript's built-in String class.
//
// P: A function given a string and delimiter, logs output of that string
// split along the delimiter.
//
// E: empty string, empty delimiter, missing delimiter
// D: string iteration
// A: - function that takes two parameters, str and delimiter
//    - log error and return if no delimiter given
//    - initialize result string to ''
//    - iterate over string
//      - if delimiter is '', log char
//      - if char is not delimiter, append to result string
//      - if char is delimiter, log result string and reassign to ''
//    - log result string if delimiter is not '' (otherwise empty line at end)

function splitString(str, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let token = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === delimiter) {
      console.log(token);
      token = '';
    } else if (delimiter === '') {
      console.log(str[idx]);
    } else {
      token += str[idx];
    }
  }

  // textbook solution prints token only if token is not empty
  // but this misses if a delimiter is at the end of the string
  // JS String.split will insert a '' element at end, so we should
  // print a blank line
  // but we want to suppress blank line if delimiter is ''
  if (delimiter !== '') console.log(token);
  // if (token) console.log(token);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
