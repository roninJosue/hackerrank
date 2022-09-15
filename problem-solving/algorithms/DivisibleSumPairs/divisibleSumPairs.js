const divisibleSumPairs = (_n, k, ar) => {
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

