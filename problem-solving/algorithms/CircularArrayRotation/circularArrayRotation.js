const circularArrayRotation = (a, k, queries) => {
  let newArr = []

    for (let index = 0; index < a.length; index++) {
      let newIndex = (k + index) % a.length
      newArr[newIndex] = a[index]
    }

  return queries.map(q => newArr[q])
}

console.log(circularArrayRotation([1, 2, 3, 7], 11, [0, 1, 2, 3]))
