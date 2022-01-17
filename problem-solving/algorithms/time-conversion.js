/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 *  Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

const timeConversion = (time) => {
  /**
   * si son las 12:XX:XXAM
 Se le restan 12 hrs

si la hora esta entre 1:XX:XXAM - 12:XX:XXPM
 Las horas y minutos permanecen igual

Horas entre 1:XX:XXPM - 11:XX:XXPM
 Se agregan 12 horas
   */
}

timeConversion('12:01:00PM')