/**
 * Given an array of bird sightings where every element represents a bird type id,
 * determine the id of the most frequently sighted type.
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 */

const migratoryBirds = (arr) => {
  const birdCount = {};
  arr.forEach((bird) => {
    if (birdCount[bird]) {
      birdCount[bird] += 1;
    } else {
      birdCount[bird] = 1;
    }
  });
  const max = Math.max(...Object.values(birdCount));
  const maxKeys = Object.keys(birdCount).filter((key) => birdCount[key] === max);
  return Math.min(...maxKeys);
};
