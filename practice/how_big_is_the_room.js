// Build a program that asks the user to enter the length and width of a room in
// meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.

const SQ_FT_PER_SQ_METER = 10.7639;

let rlSync = require('readline-sync');

let message = 'Enter the length of the room: ';
let length = Number(rlSync.question(message));

message = 'Enter the width of the room: ';
let width = Number(rlSync.question(message));

let areaMeters = (width * length).toFixed(2);
let areaFeet = (areaMeters * SQ_FT_PER_SQ_METER).toFixed(2);

message = `The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`;

console.log(message);
