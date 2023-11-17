// Write a function that takes an array of integers between 0 and 19 and returns
// an array of those integers sorted based on the English word for each number:

// P: given array of integers(0-19), return array sorted by english word for
// number questions: number negative or > 19, wrong arity, wrong type, wrong
// value type in array,
// E: given, empty array
// D: array: sort()
// A: - define function alphabeticNumberSort that takes one array parameter ->
// numbers
//    - set const for word values (per given string)
//    - map numbers to words
//    - sort (default sort callback compares strings)
//    - return sorted array

function alphabeticNumberSort(numbers) {
  const numberWords = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen'.split(', ');

  return numbers
    .map(val => numberWords[val])
    .sort();
}


console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
