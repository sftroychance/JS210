// 'Bubble Sort' is one of the simplest sorting algorithms available. Although
// it is not an efficient algorithm, it is an excellent exercise for student
// developers. In this exercise, you will write a function that sorts an array
// using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array.
// On each pass, the two values of each pair of consecutive elements are
// compared. If the first value is greater than the second, the two elements are
// swapped. This process is repeated until a complete pass is made without
// performing any swaps — at which point the array is completely sorted.

// Write a function that takes an array as an argument and sorts that array
// using the bubble sort algorithm described above. The sorting should be done
// "in-place" — that is, the function should mutate the array. You may assume
// that the array contains at least two elements.

// P: Bubble sort per definition
// E: given
// D: array (sort in place)
// A:
//  - declare function bubbleSort that takes one parameter -> array
//  - declare swapFlag = true;
//  - endIndex = array.length - 1
//  - while swapFlag
//    - swapFlag = false;
//    iterate index 0 to endIndex - 1
//      - if element at idx > element at idx + 1
//        - swap them
//        - swapFlag = true;
//    - endIndex -= 1;
//

function bubbleSort(array) {
  let swapFlag;
  let endIndex = array.length - 1;

  do {
    swapFlag = false;

    for (let idx = 0; idx <= endIndex - 1; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swapFlag = true;
      }
    }

    endIndex -= 1;
  } while (swapFlag);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
