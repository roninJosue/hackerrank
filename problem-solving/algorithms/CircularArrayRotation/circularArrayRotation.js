const circularArrayRotation = (a, k, queries) => {
  let newArr = []
  for (let x = 1; x <= k; x++) {
    newArr = []
    for (let index = 0; index < a.length; index++) {
      const newIndex = (index + a.length + 1) % a.length
      newArr[newIndex] = a[index]
    }
    a = [...newArr]

  }

  return queries.map(q => newArr[q])
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]))
///console.log(circularArrayRotation([3, 1, 2], 2, [0, 1, 2]))