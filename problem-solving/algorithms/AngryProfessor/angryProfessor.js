const angryProfessor = (k, a) => {
  const arrivedOn = a.filter(time => time <= 0)
  return arrivedOn.length >= k ? 'NO' : 'YES'
}

//console.log(angryProfessor(3, [-2, -1, 0, 1, 2]))

console.log(angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]))
console.log(angryProfessor(10, [23, -35, -2, 58, -67, -56, -42, -73, -19, 37]))
console.log(angryProfessor(9, [13, 91, 56, -62, 96, -5, -84, -36, -46, -13]))
console.log(angryProfessor(8, [45, 67, 64, -50, -8, 78, 84, -51, 99, 60]))
console.log(angryProfessor(7, [26, 94, -95, 34, 67, -97, 17, 52, 1, 86]))
console.log(angryProfessor(2, [19, 29, -17, -71, -75, -27, -56, -53, 65, 83]))
console.log(angryProfessor(10, [-32, -3, -70, 8, -40, -96, -18, -46, -21, -79]))
console.log(angryProfessor(9, [-50, 0, 64, 14, -56, -91, -65, -36, 51, -28]))
console.log(angryProfessor(6, [-58, -29, -35, -18, 43, -28, -76, 43, -13, 6]))
console.log(angryProfessor(1, [88, -17, -96, 43, 83, 99, 25, 90, -39, 86]))