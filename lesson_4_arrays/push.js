// Write a function named push that accepts two arguments: an Array and any
// other value. The function should append the second argument to the end
// of the Array, and return the new length of the Array.

function push(array, ...newElements) {
  const elements = [...newElements];

  for (let idx = 0; idx < elements.length; idx += 1) {
    array[array.length] = elements[idx];
  }

  return array.length;
}

const myArray = [1, 2, 3];
console.log(push(myArray, 4));
console.log(myArray);
console.log(push(myArray, 5, 6));
console.log(myArray);

// Array.prototype.push() mutates the caller
// returns the length of the mutated array
// allows multiple elements to be added, as above
