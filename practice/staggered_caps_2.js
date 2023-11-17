// Modify the function from the previous exercise so that it ignores
// non-alphabetic characters when determining whether a letter should be upper
// or lower case. Non-alphabetic characters should still be included in the
// output string, but should not be counted when determining the appropriate
// case.

// P: stagger case but only stagger when letter encountered
// E: given
// D: array: map
// A:
//  - function staggeredCase, 1 param -> str
//    - split into chars
//    - set capitalizeFlag = true
//    - map
//      - if matches letter
//        - if capitalizeFlag = true, to uppercase, else lowercase
//        - flag = !flag
//    - join and return

function *cycleArray(arr) {
  let iteration = 0;

  while (true) {
    yield arr[iteration % arr.length];
    iteration += 1;
  }
}

function staggeredCase(str) {
  const caseFunctions = [
    char => char.toUpperCase(),
    char => char.toLowerCase()
  ];

  const caseIterator = cycleArray(caseFunctions);

  const isAlpha = char => !!char.match(/[a-z]/i);

  return [...str]
    .map(char => (isAlpha(char) ? caseIterator.next().value(char) : char))
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
