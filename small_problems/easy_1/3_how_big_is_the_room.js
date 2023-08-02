// Build a program that asks the user to enter the length and width of a
// room in meters, and then logs the area of the room to the console in
// both square meters and square feet.
//
// Note: 1 square meter == 10.7639 square feet
//
// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.
const rlSync = require('readline-sync');

const SQ_FEET_PER_SQ_METER = 10.7639;
const SQ_METERS_PER_SQ_FOOT = 0.0929;

console.log('Enter your room dimensions, and I will calculate the area.');

let units;
do {
  console.log('Would you like to enter (f)eet or (m)eters?');
  units = rlSync.prompt();
  units = units.charAt(0).toLowerCase();

  if (units !== 'm' && units !== 'f') {
    console.log('Please enter "f" or "m" to indicate units.');
    units = undefined;
  }
} while (units === undefined);

let message = 'Enter the length of the room: ';
const length = Number(rlSync.question(message));

message = 'Enter the width of the room: ';
const width = Number(rlSync.question(message));

let areaFeet;
let areaMeters;
let result;
let altResult;
if (units === 'm') {
  areaMeters = length * width;
  areaFeet = areaMeters * SQ_FEET_PER_SQ_METER;
  result = `${areaMeters.toFixed(2)} square meters`;
  altResult = `${areaFeet.toFixed(2)} square feet`;
} else {
  areaFeet = length * width;
  areaMeters = areaFeet * SQ_METERS_PER_SQ_FOOT;
  result = `${areaFeet.toFixed(2)} square feet`;
  altResult = `${areaMeters.toFixed(2)} square meters`;
}

message = `The area of the room is ${result} (${altResult}).`;

console.log(message);
