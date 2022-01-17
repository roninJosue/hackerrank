/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 *  Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

const timeConversion = (time) => {
  const AM = 'AM'
  const PM = 'PM'
  const twelveHours = 12
  const amPm = time.slice(-2)
  const hour = Number(time.slice(0, 2))
  const minutesAndSeconds = time.slice(2, time.length - 2)

  const calculateHour = (h, operation = 'sum') => {
    const result =  operation === 'sum' ? h + twelveHours : h - twelveHours

    return ('00'+result).slice(-2)
  }

  if(amPm === AM && hour === twelveHours){
    return `${calculateHour(hour, 'minus')}${minutesAndSeconds}`
  }

  if(amPm === PM && hour < 12) {
    return `${calculateHour(hour)}${minutesAndSeconds}`
  }

  if(hour === 12 && amPm === PM){
    return `${hour}${minutesAndSeconds}`
  }

  if(amPm === AM && hour < 12){
    return `${('00'+hour).slice(-2)}${minutesAndSeconds}`
  }

}

console.log(timeConversion('06:40:03AM'))