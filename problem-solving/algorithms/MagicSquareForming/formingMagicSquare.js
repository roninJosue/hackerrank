const formingMagicSquare = (s) => {
  const magicSquares =
    [[[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]];

  let min = 10000;

  for (let i = 0; i < magicSquares.length; i++) {
    let sum = 0;
    for (let j = 0; j < s.length; j++) {
      for (let k = 0; k < s.length; k++) {
        sum += Math.abs(s[j][k] - magicSquares[i][j][k]);
      }
    }
    if (sum < min) {
      min = sum;
    }
  }

  return min;
};

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]));
console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]));