const maxSubsetSum = (arr) => {
  let sum = arr[0];
  let previousSum = 0;

  for (let index = 1; index < arr.length; index++) {
      let tempSum = Math.max(sum, previousSum)
      sum = previousSum + arr[index];
      previousSum = tempSum
  }

  return Math.max(sum, previousSum)
}

console.log(maxSubsetSum([-2, 1, 3, -4, 5]))
console.log(maxSubsetSum([3, 5, -7, 8, 10]))
console.log(maxSubsetSum([-5]))