const leftRotation = (arr, d) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let newIndex = (i - d) % arr.length
    newArr[newIndex] = arr[i]
  }

  return Object.values(newArr).map(n=>{
    return n
  })
}

console.log(leftRotation([1, 2, 3, 4, 5], 4))