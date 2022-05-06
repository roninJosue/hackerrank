const dayOfTheProgrammer = year => {
  const programmerDay = 256
  const sumDaysExceptFeb = 215

  let isLeap
  if (year < 1918) {
    isLeap = year % 4 === 0
  } else {
    isLeap = (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
  }

  let febDays = isLeap ? 29 : 28
  febDays = year === 1918 ? 15 : febDays

  const programmerDayDate = programmerDay - (sumDaysExceptFeb + febDays)
  return `${programmerDayDate}.09.${year}`
}

dayOfTheProgrammer(1918)