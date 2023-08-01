// what is logged to the console in the following snippets, and why?

// 1
function changeMyWord(word) {
  console.log(word); // 'Hello'
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord); // 'Hello'
// myWord is a String, a primitive data type, and therefore immutable, so
// in the call to changeMyWord, pass-by-value is the behavior. The return
// value of changeMyWord is undefined (no explicit return), but this is not
// used. After invoking changeMyWord, myWord has the same value. In
// changeMyWord, the local variable word has the value of myWord passed as
// an argument, and this is logged; that local variable is reassigned in the
// function, but nothing is done with the new value.

// 2
function changeMyWord(word) {
  console.log(word); // 'Hello'
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord); // 'HELLO'
// Behavior is pass-by-value, and myWord is not mutated by changeMyWord()
// because it is a String, a primitive data type. In the function myWord and
// word point to different strings that have the same value, and that is
// what is logged. The local variable word is reassigned in changeMyWord,
// and the resulting value is returned by the function. Back in top-level
// scope, myWord is reassigned to the value returned by the function
// ('HELLO') and that is what is logged. myWord changes in this code, but
// not because of the function; is it reassigned.

// 3
function changeMyWord(word) {
  console.log(word); // 'Hello'
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord); // 'Hello'
console.log(myOtherWord); // 'HELLO'
// Again, myWord is sent as an argument to changeMyWord, and there the local
// variable word contains the same value, but stored at a different location
// in memory. That String value is logged, and local variable word is
// reassigned and then returned. myOtherWord is initialized to contain the
// return value from the function. myWord is not affected by the function call.

// 4
function changeMyWords(words) {
  console.log(words); // ['Hello', 'Goodbye']
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords); // ['Hi', 'Goodbye']
// myWord is an Array (an object), so it is sent as an argument to
// changeMyWords as a reference to the Array (pass-by-reference); thus, the
// function can mutate the Array. First it logs the value of local variable
// words, which points to the same Array as myWords. The first element is
// assigned to a new String value; the return value of the function is
// undefined, and that value is not used. After the function call, logging
// myWords reflects that it was mutated in the function.

// 5
function changeMyWords(words) {
  console.log(words); // ['Hello', 'Goodbye']
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords); // ['Hello', 'Goodbye']
// in the call to changeMyWords, a reference to the array MyWords is sent as
// the argument, and in the function, local variable words points to the
// same array, indicated when it is logged. The local variable is then
// reassigned to point to a new Array with different values. Reassignment
// does not mutate the original value. The return value of the function is
// undefined but is not used. Although the reference is passed to the function,
// the function does not mutate the array, so this is reflected when myWords
// is logged after the function call.


