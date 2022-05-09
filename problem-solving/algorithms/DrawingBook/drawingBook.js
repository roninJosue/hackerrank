const pageCount = (n, p) => {
  const pages = Array.from({length: n}, (_, i) => i + 1)
  const pagesReverse = [...pages].reverse()
  let count = 0;
  let count2 = 0

  for (let index = 0; index < n; index++) {
    if (index === 0 && pages[index] === p) {
      break;
    } else if ((p === pages[index] || p === pages[index + 1]) && index > 0) {
      break;
    }
    count++
  }

  for (let index = 0; index < n; index++) {
    if (index === 0 && pagesReverse[index] === p) {
      break;
    } else if ((p === pagesReverse[index] || p === pagesReverse[index + 1]) && index > 0) {
      break;
    }
    count2++
  }

  console.log(pages)
  console.log(pagesReverse)
  console.log(count, count2)
  return count > count2 ? count2 : count
}

//console.log(pageCount(6, 2))
console.log(pageCount(5, 4))
