/* eslint-disable */
function zeroPad(num) {
  return num < 10 ? `0${num}` : `${num}`
}

const formats = {
  d: date => zeroPad(date.getDate()),
  m: date => zeroPad(date.getMonth() + 1),
  y: date => zeroPad(date.getYear() % 100),
  Y: date => `${date.getFullYear()}`,
  F: '%Y-%m-%d',
  D: '%m-%d-%y'
}

function strftime(format, date) {
  const result = format.replace(/%([a-zA-Z])/g, (m, f) => {
    const formatter = formats[f]
    if (typeof formatter === 'function') {
      return formatter(date)
    } else if (typeof formatter === 'string') {
      return strftime(formatter, date)
    }
    return f
  })
  return result
}
