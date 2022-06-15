const designerPdfViewer = (h, word) => {
  const n = word.length
  const heightArr = []
  for (let index = 0; index < word.length; index++) {
    const pos = word.charCodeAt(index) - 97
    heightArr.push(h[pos])
  }

  return Math.max(...heightArr) * n
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))