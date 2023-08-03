// In this exercise, you will implement your own version of the
// Array.prototype.reverse method. Your implementation should differ from
// the built-in method in the following two ways:
//
//  It should accept either a string or an array as an argument.
//  It should return a new string or array.

function reverse(inputForReversal) {
  let result;
  const length = inputForReversal.length;

  if (Array.isArray(inputForReversal)) {
    if (length === 0) {
      return [];
    }

    result = [];
    for (let i = length - 1; i >= 0; i -= 1) {
      result[result.length] = inputForReversal[i];
    }
  } else {
    if (length === 0) {
      return '';
    }

    result = '';
    for (let i = length - 1; i >= 0; i -= 1) {
      result += inputForReversal[i];
    }
  }

  return result;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]