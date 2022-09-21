const cutTheSticks = arr => {
  arr.sort((a, b) => a - b)
  let minLengthStick = arr[0]
  let sticksCut = []

  while (arr.length) {
    sticksCut.push(arr.length)
    arr = arr
      .map(stick => stick - minLengthStick)
      .filter(stick => stick > 0)
    minLengthStick = arr[0]
  }

  return sticksCut
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]))