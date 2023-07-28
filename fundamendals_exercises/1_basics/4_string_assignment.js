// Given code:

// let myName = 'Bob';
// const saveName = myName;
// myName = 'Alice';
// console.log(myName, saveName);

// What does this log to the console?
// Expect it to log 'Alice Bob'
// strings are primitives, and assignment of a variable with a primitive
// value will result in that value being copied, not referenced like a pointer

// But what about:
const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName);

// Expect this to log 'Bob Bob'
// String.prototype.toUpperCase() returns a new value and does not attempt
// to mutate the caller (so no error would be raised here).
// ALL primitives are immutable, and Strings are primitives.


// If you take another look at the code, you'll notice that on line 3, the
// string referenced by the myName variable calls the
// String.prototype.toUpperCase method. How is it possible that even though
// this string is a primitive, it's still able to call a method?

// Primitives can call methods--they just can't be mutated. Not all methods
// mutate the caller. This method returns a new String value and to be
// useful it should be assigned to a variable. Here the method is called but
// the return value is not saved.

// NEW INFO: In contexts where a method is to be invoked on a primitive
// string or a property lookup occurs, JavaScript will automatically wrap
// the string primitive and call the method or perform the property lookup
// on the wrapper object instead. (e.g., Primitive strings are coerced to
// String objects temporarily in order to run a String method.)