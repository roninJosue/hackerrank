const cutTheSticks = arr => {
  let minLengthStick = Math.min(...arr)
  let sticksCut = []

  while (arr.length) {
    sticksCut.push(arr.length)
    arr = arr
      .map(stick => stick - minLengthStick)
      .filter(stick => stick > 0)
    minLengthStick = Math.min(...arr)
  }

  return sticksCut
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]))