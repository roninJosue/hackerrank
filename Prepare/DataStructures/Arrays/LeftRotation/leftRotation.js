const leftRotation = (arr, d) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let newIndex = (d - i) % arr.length
    newArr[newIndex] = arr[i]
  }
  return newArr
}

console.log(leftRotation([1, 2, 3, 4, 5], 4))