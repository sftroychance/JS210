// Implement a binarySearch function that takes an array and a search item as
// arguments, and returns the index of the search item if found, or -1
// otherwise. You may assume that the array argument will always be sorted.

// P: binary search function, return -1 if not found, index if found
// assume: array will always be sorted
// questions: elements always same type? will all given element types
//    employ comparison operators (e.g., objects)
// E: given
// D: array
// A:
// declare function binarySearch, 2 params -> array, target
//  - declare low = 0, high = array.length - 1
//  - while low < high
//    - declare pivot = low + floor((high - low) / 2)
//    - if array[pivot] = target, return pivot
//    - if array[pivot] > target, set low to pivot + 1
//    - if array[pivot] < target, set high to pivot - 1
//  return -1

function binarySearch(array, target) {
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi) {
    let pivot = lo + Math.floor((hi - lo) / 2);

    if (array[pivot] === target) return pivot;

    [lo, hi] = target > array[pivot]
      ? [pivot + 1, hi]
      : [lo, pivot - 1];
  }

  return -1;
}


const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
