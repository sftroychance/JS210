// What do the following snippets log to the console, and why?

// 1
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord); // 'Hello'`
console.log(myOtherWord); // 'Hello'
// myWord is assigned to a String value, which is a primitive data type.
// myOtherWord is assigned to the value of myWord (not a pointer). Both
// variables point to a String with the value 'Hello', but they are
// different String values at different locations in memory.

// 2
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord); // 'Goodbye'
console.log(myOtherWord); // 'Hello'
// myWord is assigned the String value 'Hello'; myOtherWord is assigned the
// value of myWord, not its address, because String is a primitive data
// type. myWord is then assigned to a new String value of 'Goodbye', which
// does not affect myOtherWord because the variables point to String values
// at different locations in memory.

// 3
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myOtherWords); // ['Hi', 'Goodbye']
// myWords is assigned to the reference to an Array value. myOtherWords is
// assigned the pointer to myWords; now both variables point to the same
// Array. When one of the elements of that array is reassigned to a new
// String value, the Array referenced by both variables is mutated.

// 4
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords); // ['Hi', 'Bye']
console.log(myOtherWords); // ['Hello', 'Goodbye']
// myWords is assigned to the reference to an array value; myOtherWords is
// then assigned the reference contained in myWords. myWords is then
// reassigned to a reference pointing to a different array, but myOtherWords
// still points to the original array.

// 5
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // 'Hello'
// myWords contains a reference to the given array. myWord is then assigned
// the value of the first element of that Array, which is a String, a
// primitive data type; since it is a primitive type, myWord contains the
// String value, not a reference to it, and now myWord and myWords[0]
// point to different strings at different locations in memory. myWords[0]
// reassigns the first element of the array to a new String value, but
// myWord is not affected.

// 6
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // 'Hello'
// myWords is assigned to refer to the given Array object. myWord is
// assigned to a String value. The first element in myWords is reassigned to
// the String value contained in myWord; because String is a primitive data
// type, myWords[0] contains a String value, not a reference. myWords[0] and
// myWord refer to different String values at different locations in memory.
// myWord is then reassigned to the value 'Hello', which does not affect
// myWords[0].



//

