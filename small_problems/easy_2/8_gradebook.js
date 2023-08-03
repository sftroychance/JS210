// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// validation of input not required
//
// A: - declare function that takes three parameters: score1, score2, score3
//    - reduce to get sum and divide by 3 to get average
//    - if statements for letter grade
//    - return letter grade

function getGrade(score1, score2, score3) {
  const avg = (score1 + score2 + score3) / 3;
  let letterGrade;

  if (avg < 60) {
    letterGrade = 'F';
  } else if (avg < 70) {
    letterGrade = 'D';
  } else if (avg < 80) {
    letterGrade = 'C';
  } else if (avg < 90) {
    letterGrade = 'B';
  } else {
    letterGrade = 'A';
  }

  return letterGrade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
