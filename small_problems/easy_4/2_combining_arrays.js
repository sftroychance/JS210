// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates in
// the original arrays. You may assume that both arguments will always be
// arrays.

// function union(arr1, arr2) {
//   const filtered = arr2.filter((element) => !arr1.includes(element));
//   return [...arr1, ...filtered];
// }

function union(...args) {
  return args.reduce((result, arr) => {
    arr.forEach((element) => {
      if (!result.includes(element)) {
        result.push(element);
      }
    });

    return result;
  }, []);
}

console.log(union([1, 3, 5], [3, 6, 9], [1, 3, 8]));    // [1, 3, 5, 6, 9]