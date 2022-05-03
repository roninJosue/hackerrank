const countingValleys = (steps, path) => {
  let sum = 0
  let countValleys = 0

  for (let index = 0; index < steps; index++) {
    sum += path[index] === 'D' ? 1 : -1
    if (path[index] === 'U' && sum === 0) countValleys++
  }

  return countValleys
}

//console.log(countingValleys(8, 'DDUUUUDD'))
console.log(countingValleys(8, 'UDDDUDUU'))