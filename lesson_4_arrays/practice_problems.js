// Write a function that returns the first element of an array passed in as
// an argument.

function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

// Write a function that returns the last element of an array passed in as
// an argument.

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"

// Write a function that accepts two arguments, an array and an integer
// index position, and returns the element at the given index. What
// happens if the index is greater than the length of the array? What
// happens if it is a negative integer?

// will return `undefined` for index out of range or negative

function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // what does this return? undefined
nthElementOf(digits, -1);  // what does this return? undefined

// Can we insert data into an array at a negative index? If so, why is this
// possible?

// Yes, this is possible because an array is an object, so properties can be
// added; when adding an element at a negative index, you are actually adding
// a new property with the index being the name of the property; it does not
// change the length property of the array, but the element can be accessed
// using that index as a key.

// Write a function that accepts an array as the first argument and an
// integer value, count, as the second. It should return a new array that
// contains the first count elements of the array.

function firstNOf(arr, count) {
  // const result = [];
  //
  // for (let i = 0; i < count; i += 1) {
  //   result.push(arr[i]);
  // }
  //
  // return result;
  return arr.slice(0, count);
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]

// Write a function like the previous one, except this time return the last
// count elements as a new array.

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice();
  }
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]

// Using the function from the previous problem, What happens if you pass a
// count greater than the length of the array? How can you fix the
// function so it returns a new instance of the entire array when count is
// greater than the array length? (fixed above)

// If the count is greater than the length of the array, it will return a
// part of the array or the entire array; we can fix this by adjusting the
// slice to return a copy of the entire array. Note that
// Array,prototype.slice() will return an empty array if the start is
// greater than array length


// Write a function that accepts two arrays as arguments and returns an
// array with the first element from the first array and the last element
// from the second array.

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]

// Write a function that creates and returns a new array from its array
// argument. The new array should contain all values from the argument
// array whose positions have an odd index.

function oddElementsOf(arr) {
  return arr.filter((ele, idx) => idx % 2 == 1);
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

// Write a function that takes an array argument and returns a new array
// that contains all the argument's elements in their original order
// followed by all the argument's elements in reverse order.

function reverseRepeatArray(arr) {
  // let result = arr.slice();
  // let reversed = arr.slice().reverse();
  // return [...result, ...reversed];
  return arr.concat(arr.slice().reverse());
}

reverseRepeatArray([1, 2, 3, 4, 5, 'a']);

// Use the array sort method to create a function that takes an array of
// numbers and returns a new array of the numbers sorted in descending
// order. Do not alter the original array.

function sortDescending(arr) {
  const dupArr = arr.slice();
  return dupArr.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// Write a function that takes an array of arrays as an argument, and
// returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  return arr.map((subarr) => subarr.reduce((sum, value) => sum + value));
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

// Write a function that takes an array, and returns a new array with
// duplicate elements removed.

function uniqueElements(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

// Write a function that takes a sorted array of integers as an argument,
// and returns an array that includes all the missing integers (in order)
// between the first and last elements of the argument.

function missing(arr) {
  const result = [];
  for (let i = arr[0] + 1; i < arr[arr.length - 1]; i += 1) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []