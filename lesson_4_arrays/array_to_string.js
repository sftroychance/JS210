// Write a function that returns a string of all the values in an array
// with no intervening content. For example, your function should return
// '1a4' if the argument is [1, 'a', 4]. Use a for loop to process the
// array elements in sequence, and coerce each value in the array to a
// String before concatenating it to the result string.

function stringifyArray(arr) {
  let resultString = '';

  for (let idx = 0; idx < arr.length; idx += 1) {
    resultString += String(arr[idx]);
  }

  return resultString;
}

const myArray = [1, 'abc', 4, 17.5, 'xyz'];
console.log(stringifyArray(myArray));