// Modify the function from the previous exercise so that it ignores
// non-alphabetic characters when determining whether a letter should be upper
// or lower case. Non-alphabetic characters should still be included in the
// output string, but should not be counted when determining the appropriate
// case.

// - split string into char array
// - set capFlag = true
// - map - if alphabetic, return case and change capFlag
// - join

function staggeredCase(str) {
  let capFlag = false;

  return [...str]
    .map(char => {
      if (!char.match(/[a-z]/i)) return char;

      capFlag = !capFlag;

      return capFlag ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
