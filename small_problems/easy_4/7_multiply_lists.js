// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array that contains the product of each pair of
// numbers from the arguments that have the same index. You may assume that the
// arguments contain the same number of elements.

function multiplyList(...args) {
  const result = [];

  for (let i = 0; i < args[0].length; i += 1) {
    result[i] = 1;

    args.forEach((array) => {
      result[i] *= array[i];
    });
  }

  return result;
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
console.log(multiplyList([3, 5], [9, 10], [2, 3]));
