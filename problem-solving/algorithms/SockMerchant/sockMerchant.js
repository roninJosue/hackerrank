const sockMerchant = (n, arr) => {
  arr.sort((a, b) => a - b)
  let pairs = 0
  let steps = 1

  for (let index = 0; index < n - 1; index += steps) {
    if (arr[index] === arr[index + 1]) {
      pairs++
      steps = 2
    } else {
      steps = 1
    }
  }

  return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
//[10, 10, 10, 10, 20, 20, 20, 30, 50]