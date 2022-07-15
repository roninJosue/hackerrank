const miniMaxSum = (arr) => {
  const sum = arr.map((_num, index) => {
    return arr
      .filter((_n, i) => i !== index)
      .reduce((numberSum, number) => {
        return numberSum + number
      }, 0)
  })

  console.log(`${Math.min(...sum)} ${Math.max(...sum)}`)
}

miniMaxSum([1, 2, 3, 4, 5])