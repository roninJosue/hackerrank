const maxSubsetSum = (arr) => {
  let sum = arr[0];
  let previousSum = 0;
  let tempSum;

  for (let index = 1; index < arr.length; index++) {
      tempSum = sum
      sum = Math.max(sum, previousSum + arr[index])
      previousSum = tempSum
  }

  return sum
}

console.log(maxSubsetSum([-2, 1, 3, -4, 5]))
console.log(maxSubsetSum([3, 5, -7, 8, 10]))