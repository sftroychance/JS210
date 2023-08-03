// Write a function named unshift that accepts two arguments: an Array and
// a value. The function should insert the value at the beginning of the
// Array, and return the new length of the array. You will need a for loop
// for this problem.

function unshift(array, ...newElements) {
  const elements = [...newElements];

  // shifting the array by necessary number of positions
  for (let idx = array.length + (elements.length - 1); idx > 0; idx -= 1) {
    array[idx] = array[idx - elements.length];
  }

  // add elements to array
  for (let idx = 0; idx < elements.length; idx += 1) {
    array[idx] = elements[idx];
  }

  return array.length;
}

const myArray = [1, 2, 3];
console.log(unshift(myArray, 5));
console.log(myArray);
console.log(unshift(myArray, 6, 7));
console.log(myArray);

// Array.prototype.unshift() mutates the array
// returns the new length of the array
// can add multiple elements
