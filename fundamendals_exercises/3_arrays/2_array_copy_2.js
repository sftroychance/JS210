// In the previous exercise, the value of the reference gets copied. For
// this exercise, only the values of the array should be copied, but not
// the reference. Implement two alternative ways of doing this.

let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray;
// alternative 1: use slice to duplicate the array
// const myOtherArray = myArray.slice();
// alternative 2: iterate over myArray and push values to a new array
const myOtherArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);