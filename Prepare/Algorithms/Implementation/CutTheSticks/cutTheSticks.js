const cutTheSticks = arr => {
  let minLengthStick = Math.min(...arr)
  let sticksCut = []
  let size = arr.length

  while (size > 0) {
    sticksCut.push(arr.length)
    arr = [...arr].map(stick => {
      return stick - minLengthStick
    }).filter(stick => stick > 0)
    minLengthStick = Math.min(...arr)
    size = arr.length
  }

  return sticksCut
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]))