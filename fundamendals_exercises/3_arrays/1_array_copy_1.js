// Read through the code shown below. What does it log to the console at
// lines 6 and 10?

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]

// myOtherArray is initialized to refer to the array referenced by myArray;
// therefore, when a value is popped from myArray, it is also reflected in
// myOtherArray.

// myArray is then reassigned to a new array and no longer shares the
// reference with myOtherArray, so myOtherArray does not change
