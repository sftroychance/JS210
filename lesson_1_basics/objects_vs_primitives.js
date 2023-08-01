// What do the following snippets log to the console and why?

// 1
let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord); // 'Hello'
// String values are primitives and therefore not mutable. The result of the
// call to String.concat() is not saved or logged, and `myWord` is not
// mutated by calling that method.

// 2

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord); // 'Hello'
myWord.replace('H', 'J');
console.log(myWord); // 'Hello'
myWord.split(' ');
console.log(myWord); // 'Hello'
// String is a primitive data type, so no method calls will mutate it.
// String methods are called on the string, but nothing is done with their
// return values.

// 3

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords); // ['Hello', 'Goodbye']
// Arrays are mutable and Array.push() does mutate the array, adding an
// element to the end of the array; the method returns the new size of the
// array, but this value is not used.

// 4

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords); // ['Hello']
// myWords is an Array and is thus mutable; however Array.concat() method
// does not mutate the array (it returns a new array), so myWords is not
// affected. The return value from MyWords.concat() is not used.

// 5
let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords); // ['Hello']
// myWords is an Array and thus mutable; however, String.toUpperCase() does
// not mutate the String that calls the method; it returns a new String. The
// string at myWords[0] is not mutable. The return value for the method call
// is not saved or used.

// 6

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords); // ['HELLO']
// myWords is mutable as it is an Array. The element at index 0 is a String
// and is not mutable; however, that element is reassigned to the return
// value of calling the String.toUpperCase() method on the original value.
