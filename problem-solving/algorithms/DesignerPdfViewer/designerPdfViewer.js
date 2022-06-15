const designerPdfViewer = (h, word) => {
  const n = word.length
  let maxHeight = -1

  word.split('').forEach(w => {
    const pos = w.charCodeAt(0) - 97
    maxHeight = maxHeight < h[pos] ? h[pos] : maxHeight
  })

  return maxHeight * n
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))