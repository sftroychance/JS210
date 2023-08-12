// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// the property `Array.length` is 1 higher than the last non-negative integer
// index in the array; we can add other elements with negative and/or
// non-integer keys, but those will not be counted with the length variable;
// however, their existence is reflected in the array returned by
// `Object.keys()`, so the length property of that array will reflect those
// elements