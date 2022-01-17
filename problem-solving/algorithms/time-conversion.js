/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 *  Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

const timeConversion = (time) => {
  const amPm = time.slice(-2)
  const hour = Number(time.slice(0, 2))
  const minutesAndSeconds = time.slice(2, time.length - 2)

  if (hour === 12) {
    return amPm === 'AM' ? `00${minutesAndSeconds}` : `${hour}${minutesAndSeconds}`
  } else {
    const hh = amPm === 'PM' ? hour + 12 : hour
    return `${hh < 10 ? '0' + hh : hh}${minutesAndSeconds}`
  }

}

console.log(timeConversion('07:05:45PM'))