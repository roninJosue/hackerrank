const jumpingOnClouds = (c) => {
  let jumps = 0

  for (let i = 0; i < c.length - 1;) {
    if (c[i + 2] === 0 && i < c.length - 2) {
      i++
    }
    i++
    jumps++
  }

  return jumps
}

jumpingOnClouds([0, 0, 0, 0, 1, 0])
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])
jumpingOnClouds([0, 0, 0, 1, 0, 0])