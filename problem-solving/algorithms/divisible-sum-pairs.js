/**
 * Given an array of integers and a positive integer k,
 * find out whether there are two distinct indices i and j in the array such that nums[i] + nums[j] is divisible by k.
 */

const divisibleSumPairs = (n, k, ar) => {
  let sum = 0;
  ar.forEach((num, index) => {
    ar.forEach((num2, index2) => {
      if (index2 > index) {
        if ((num + num2) % k === 0) {
          sum++;
        }
      }
    })
  })
  return sum;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))

