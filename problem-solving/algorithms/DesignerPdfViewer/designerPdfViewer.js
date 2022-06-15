const designerPdfViewer = (h, word) => {
  const n = word.length
  let maxHeight = -1

  word.split('').forEach(w => {
    maxHeight = Math.max(maxHeight, h[w.charCodeAt(0) - 97])
  })

  return maxHeight * n
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))