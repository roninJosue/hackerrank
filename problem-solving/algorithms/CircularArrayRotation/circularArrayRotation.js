const circularArrayRotation = (a, k, queries) => {
  let newArr = []

    for (let index = 0; index < a.length; index++) {
      let newIndex = (k + index + 1) % a.length
      if (newIndex === 0) newIndex = a.length - 1
      else newIndex--
      newArr[newIndex] = a[index]
    }

  return queries.map(q => newArr[q])
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]))
