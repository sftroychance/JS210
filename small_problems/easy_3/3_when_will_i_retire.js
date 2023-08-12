// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// What is your age? 30
// At what age would you like to retire? 70
//
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const rlSync = require('readline-sync');

let prompt = 'What is your age? ';
const age = Number(rlSync.question(prompt));

prompt = 'At what age would you like to retire? ';
const retirementAge = Number(rlSync.question(prompt));

const currentYear = new Date().getFullYear();
// const today = Date();
// console.log(today);
// const currentYear = today.getFullYear();

let yearsToWork = retirementAge - age;
const retirementYear = currentYear + yearsToWork;

yearsToWork += yearsToWork > 1 ? ' years' : 'year';

console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToWork} of work to go!`);

// if we used `Date()` instead of `new Date()`:
// `new Date()` is the Date() constructor and returns a Date object
// `Date()` returns a string representation of the current date and
// time--you can't call any Date methods on that
