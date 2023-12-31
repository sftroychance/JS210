// Write a function that takes a string argument consisting of a first name,
// a space, and a last name, and returns a new string consisting of the last
// name, a comma, a space, and the first name.

function swapName(name) {
  const [last, ...first] = name.split(' ').reverse();

  return [last, first.reverse().join(' ')].join(', ');

  // return name
  //   .split(' ')
  //   .reverse()
  //   .join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Mary Ann Roberts'));    // "Roberts, Joe"
