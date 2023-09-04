// Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// line 17 newSpecies is declared as var, which has function scope (here it is global scope); that declaration is hoisted. but the variable is not reassigned in every loop--since it has global scope, it retains its value every loop until changed (the expectation here is that `var newSpecies` reinitializes the variable in every loop, not the case).

// to fix this i would use let on line 17, so the variable is reinitialized at every loop, and this works
