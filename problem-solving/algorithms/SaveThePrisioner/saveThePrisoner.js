const saveThePrisoner = (n, m, s) => {
  const r = m % n;
  const res = (r + s - 1) % n
  return res === 0 ? n : res
}

console.log(saveThePrisoner(208526924, 756265725, 150817879))
