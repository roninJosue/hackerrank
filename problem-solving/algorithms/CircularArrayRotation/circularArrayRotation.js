const circularArrayRotation = (a, k, queries) => {
  let newArr = []
  const size = a.length

    for (let index = 0; index < size; index++) {
      let newIndex = (k + index) % size
      newArr[newIndex] = a[index]
    }

  return queries.map(q => newArr[q])
}

console.log(circularArrayRotation([1, 2, 3, 7], 11, [0, 1, 2, 3]))
