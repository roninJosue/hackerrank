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
