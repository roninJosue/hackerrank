const pickingNumbers = (a) => {
  a.sort((x, y) => x - y)
  let max = -1
  let indexArr = []

  for (let index = 0; index < a.length; index++) {
    let temp = []
    for (let index2 = index + 1; index2 < a.length; index2++) {
      const absoluteDiff = Math.abs(a[index] - a[index2])

      if (absoluteDiff <= 1) {
        if (!indexArr.includes(index)) {
          if (temp.every(c => Math.abs(c - a[index]) <= 1) || temp.length === 0){
            indexArr.push(index)
            temp.push(a[index])
          }
        }

        if (!indexArr.includes(index2)) {
          if (temp.every(c => Math.abs(c - a[index2]) <= 1) || temp.length === 0){
            indexArr.push(index2)
            temp.push(a[index2])
          }
        }
      }
    }

    console.log(temp)
    console.log(temp.length)
    console.log(max)
    max = max < temp.length ? temp.length : max
  }

  return max
};

console.log(pickingNumbers([4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4]))
//console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))
//pickingNumbers([4, 6, 5, 3, 3, 1])
//pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])

//4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4