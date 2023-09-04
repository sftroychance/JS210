// We're putting together some information about our new company Space Design. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows undefined. Why is that?

// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team.ceo}`);
console.log(`Scrum master: ${company.team.scrumMaster}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// An object cannot be a key, which is what we are trying to do lines 24-26; assuming `team` is only for containing the names (not the ceo, scrumMaster, and developer objects, which have nothing to do with the names), we would need to use string values for the keys on assignment and also logging

// I am fixing this by using dot notation

// note JS converts the object to a string '[object Object]' and that is the key that is set each time in object `team`; the final value assigned is undefined
