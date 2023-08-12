// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of
// "it's" is 3, not 4.

function wordSizes(str) {
  cleanStr = str.replace(/[^a-z\s]/gi, '');

  if (str.length === 0) {
    return {};
  }

  const words = cleanStr.split(' ');
  const sizes = words.map((word) => word.length);

  const result = {};
  sizes.forEach((size) => {
    result[size] = result[size] ? result[size] + 1 : 1;
  });

  return result;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes('')); // {}
console.log(wordSizes('?. ##& **')); // {}
