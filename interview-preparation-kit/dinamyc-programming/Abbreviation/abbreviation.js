const abbreviation = (a, b) => {

  let resolve = Array(b.length + 1)
    .fill(false)
    .map(() => {
      return Array(a.length + 1).fill(false)
    })

  resolve[0][0] = true

  for (let i = 1; i <= a.length; i++) {
    let isLower = a[i - 1].toLowerCase() === a[i - 1]
    if (isLower) {
      resolve[0][i] = true
    }
  }


  for (let i = 1; i <= a.length; i++) {
    const isUpper = a[i - 1] === a[i - 1].toUpperCase()
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1].toUpperCase() === b[j - 1] && isUpper) {
        resolve[j][i] = resolve[j - 1][i - 1]
      } else if (a[i - 1].toUpperCase() === b[j - 1] && !isUpper) {
        resolve[j][i] = resolve[j - 1][i - 1] || resolve[j][i - 1]
      }  else if (a[i - 1].toUpperCase() !== b[j - 1] && !isUpper) {
        resolve[j][i] = resolve[j][i - 1]
      }
    }
  }

  return resolve[b.length - 1][a.length - 1] ? 'YES' : 'NO'
}

console.log(abbreviation('daBcd', 'ABC'))