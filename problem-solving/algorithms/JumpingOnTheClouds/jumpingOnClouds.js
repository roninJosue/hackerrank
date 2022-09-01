const jumpingOnClouds = (c, k) => {
  let e = 100
  let nextIndexMove = 0

  do {
    nextIndexMove = (nextIndexMove + k) % c.length
    e = c[nextIndexMove] === 1 ? e - 3 : e - 1;
  } while (nextIndexMove !== 0)

  console.log(`Energy = ${e}`)
  return e
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)