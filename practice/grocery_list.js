// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains a
// fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times
// equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
// we return an array that contains 3 apples, 1 orange, and 2 bananas.

// P: function that takes array of 2-element subarrays - groceryList
//    questions: wrong arity or type?, subarray wrong types or wrong size?
// E: given, empty array added
// D: arrays: map/flatMap
// A: define function buyFruit that takes an array param - groceryList
//    - flatmap to create array of given length and fill with fruit

function buyFruit(groceryList) {
  return groceryList
    // .flatMap(([fruit, qty]) => Array.from({length: qty}).fill(fruit));
    .flatMap(([fruit, qty]) => Array(qty).fill(fruit));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
console.log(buyFruit([]));
