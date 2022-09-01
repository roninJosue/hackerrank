const jumpingOnClouds = (c, k) => {
  let e = 100
  let index = 0

  do {
    index = (index + k) % c.length
    e = c[index] === 1 ? e - 3 : e - 1;
  } while (index !== 0)

  return e
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)