const pageCount = (n, p) => {
  const totalPagesLeftToRight = Math.floor(n / 2);
  const turnsToTargetPageLeftToRight = Math.floor(p / 2)

  const turnsToTargetPageRightToLeft = totalPagesLeftToRight - turnsToTargetPageLeftToRight;
  return Math.min(turnsToTargetPageLeftToRight, turnsToTargetPageRightToLeft);
}

//console.log(pageCount(6, 2))
console.log(pageCount(11, 4))
