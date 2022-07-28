const maxSubsetSum = (arr) => {
  let sumEven = 0
  let sumOdd = 0

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sumEven = Math.max(sumEven, sumEven + arr[i])
    } else {
      sumOdd = Math.max(sumOdd, sumOdd + arr[i])
    }
  }

  return Math.max(sumOdd, sumEven)
}

console.log(maxSubsetSum([-2, 1, 3, -4, 5]))
console.log(maxSubsetSum([3, 5, -7, 8, 10]))