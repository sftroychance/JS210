// Write a function that takes a string consisting of one or more space
// separated words and returns an object that shows the number of words of
// different sizes.
// Words consist of any sequence of non-space characters.

function wordSizes(str) {
  if (str.length === 0) {
    return {};
  }

  const words = str.split(' ');
  const sizes = words.map((word) => word.length);

  const result = {};
  sizes.forEach((size) => {
    result[size] = result[size] ? result[size] + 1 : 1;
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));
// { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));
// {}