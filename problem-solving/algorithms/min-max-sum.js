/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

const minMaxSum = (arrNums) => {
  const sum = arrNums.map((num, index) => {
    return arrNums
      .filter((n, i) => i !== index)
      .reduce((numberSum, number) => {
        return numberSum += number
      }, 0)
  })

  console.log(`${Math.min(...sum)} ${Math.max(...sum)}`)
}

minMaxSum([1, 2, 3, 4, 5])