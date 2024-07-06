const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log('Sorted ages:', ages);
console.log('Min age:', minAge);
console.log('Max age:', maxAge);

// Find the median age (one middle item or two middle items divided by two)

let median;

const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  median = (ages[mid - 1] + ages[mid]) / 2;
} else {
  median = ages[mid];
}

console.log('Median age:', median);

// Find the average age (all items divided by number of items)

const sum = ages.reduce((a, b) => a + b, 0);
const average = sum / ages.length;

console.log('Average age:', average);

// Find the range of the ages 

const range = maxAge - minAge;

console.log('Range of ages:', range);

// Compare the value of (min - average) and (max - average)

const minAverageDifference = Math.abs(minAge - average);
const maxAverageDifference = Math.abs(maxAge - average);

console.log('Min - Average:', minAverageDifference);
console.log('Max - Average:', maxAverageDifference);