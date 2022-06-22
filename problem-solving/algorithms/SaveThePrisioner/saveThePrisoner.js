const saveThePrisoner = (n, m, s) => (m % n + s - 1) % n || n

console.log(saveThePrisoner(208526924, 756265725, 150817879))
