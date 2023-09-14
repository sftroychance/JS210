// You have a bank of switches before you, numbered from 1 to n. Every switch is
// connected to exactly one light that is initially off. You walk down the row
// of switches and toggle every one of them. You walk back to the beginning of
// the row and start another pass. On this second pass, you toggle switches 2,
// 4, 6, and so on. On the third pass, you go back to the beginning again, this
// time toggling switches 3, 6, 9, and so on. You continue to repeat this
// process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.

// P:
//  input: an integer -> lightCount
//  output: an array
//  lightCount is the number of lights and also the number of traversals

// E: below
// D: array to hold boolean state of lights -> lights
// A:
//  - declare function that takes one integer parameter - lightCount
//  - initialize array of size (lightCount + 1) -> lights
//    - to simplify logic, light number === index
//    - init each value to true to simulate light status after first pass
//  - iterate 2 to lightCount -> lightNumber
//    - on each iteration, map lights to toggle those where
//      lighNumber % idx is 0
//  - map lights -> null if false, index if true
//  - filter lights -> keep if value is truthy
//  - return array

function lightsOn(lightCount) {
  let lights = Array(lightCount + 1).fill(true);

  for (let idx = 2; idx <= lightCount; idx += 1) {
    lights = lights.map((light, lightNumber) => {
      return lightNumber % idx === 0 ? !light : light;
    });
  }

  return lights
    .map((light, idx) => (light ? idx : null))
    .filter(Boolean);
}

console.log(lightsOn(5)); //[1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(102)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(1)); // [1]
console.log(lightsOn(0)); // []
