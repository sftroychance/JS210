// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences.

function countOccurrences(array) {
  const count = array.reduce((tally, element) => {
    tally[element] = tally[element] ? tally[element] + 1 : 1;
    return tally;
  }, {});

  // for (const [element, count] of Object.entries(tally)) {
  //   console.log(`${element} => ${count}`);
  // }

  for (const property of Object.keys(count)) {
    console.log(`${property} => ${count[property]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2