// Write a program to determine a student’s grade based on the average of
// three scores you get from the user. Use these rules to compute the grade:
//
// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90
// then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70
// then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

// const NUMBER_OF_SCORES = 3;

const scores = [];

// for (let count = 1; count <= NUMBER_OF_SCORES; count++) {
for (let count = 1; ; count += 1) {
  const response = prompt(`Enter score ${count} (hit OK to end input):`);
  if (!response) break;

  scores.push(parseInt(response, 10));
}

const finalScore = scores.reduce((sum, score) => sum + score) / scores.length;

let letterGrade;

if (finalScore < 50) {
  letterGrade = 'F';
} else if (finalScore < 70) {
  letterGrade = 'C';
} else if (finalScore < 90) {
  letterGrade = 'B';
} else {
  letterGrade = 'A';
}

const result = `Based on the average of your ${scores.length} scores `
               + `your letter grade is ${letterGrade}.`;

console.log(result);
