// Write a function named concat that accepts two Array arguments. The
// function should return a new Array that contains the values from each of
// the original Arrays.

function push(array, ...newElements) {
  const elements = [...newElements];

  for (let idx = 0; idx < elements.length; idx += 1) {
    array[array.length] = elements[idx];
  }

  return array.length;
}

function concat(arr1, arr2) {
  const result = [];

  const pushAll = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      push(result, arr[i]);
    }
  };

  pushAll(arr1);
  pushAll(arr2);

  return result;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concat(arr1, arr2));
console.log(arr1);
console.log(arr2);
