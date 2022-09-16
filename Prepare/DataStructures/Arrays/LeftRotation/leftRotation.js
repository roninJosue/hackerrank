const leftRotation = (a, d) => {
  let arrayRotated = [...a]
  for (let i = 0; i < d; i++) {
    arrayRotated.push(a[i])
  }

  return arrayRotated.slice(d)
}

console.log(
  leftRotation(
    [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97],
    13
  )
)