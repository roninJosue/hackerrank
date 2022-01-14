function plusMinus(arr) {
  const nElements = arr.length

  let zero = 0
  let positive = 0
  let negative = 0

  arr.forEach(num => {
    if (num === 0) {
      zero++
    } else if (num > 0) {
      positive++
    } else {
      negative++
    }
  })

  console.log((positive / nElements).toFixed(6))
  console.log((negative / nElements).toFixed(6))
  console.log((zero / nElements).toFixed(6))
}

const test = [-4, 3, -9, 0, 4, 1]

plusMinus(test)


