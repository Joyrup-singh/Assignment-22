const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log('Sorted ages:', ages);
console.log('Min age:', minAge);
console.log('Max age:', maxAge);

// Find the median age (one middle item or two middle items divided by two)

