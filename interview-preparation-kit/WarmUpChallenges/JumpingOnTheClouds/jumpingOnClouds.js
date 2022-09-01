const jumpingOnClouds = (c) => {
  let jumps = 0

  for (let i = 0; i < c.length - 1;) {
    let second = c[i + 2]
    if (second === 1 || i === c.length - 2) i++
    else i += 2
    jumps++
  }

  return jumps
}

jumpingOnClouds([0, 0, 0, 0, 1, 0])
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])
jumpingOnClouds([0, 0, 0, 1, 0, 0])