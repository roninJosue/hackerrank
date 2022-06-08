const pickingNumbers = (a) => {
  let max = -99

  for (let x in a) {
    let res = 0
    for (let y in a) {
      if (a[x] === a[y] || a[x] === a[y] + 1) {
        res++
      }
    }
    max = max > res ? max : res
  }

  return max
};

pickingNumbers([1, 2, 2, 3, 1, 2])
