const hourglassSum = arr => {
  let sum = -63
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      const topSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      const midSum = arr[i + 1][j + 1]
      const bottomSum = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]

      let tempSum = topSum + midSum + bottomSum

      sum = tempSum > sum ? tempSum : sum
    }
  }

  return sum
}

hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
])