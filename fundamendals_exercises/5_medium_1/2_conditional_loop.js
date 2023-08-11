// The following program is expected to log each number between 0 and 9
// (inclusive) that is a multiple of 3. Read through the code shown below. Will
// it produce the expected result? Why or why not?

// let i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else {
//     i += 1;
//   }
// }

// no; the first loop will execute and the value logged, but i is never
// incremented, so the loop will continue infinitely; to fix, move the
// increment operation outside the if statement so it executes in every loop:

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }

  i += 1;
}