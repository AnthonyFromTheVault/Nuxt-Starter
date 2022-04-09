export function numberWithCommas(props) {
  return props.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function scrollToTop() {
  window.scrollTo(0, 0)
}

export function hex2rgba(hex, alpha = 1) {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export function currentMonth() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const d = new Date()
  const m = d.getMonth()
  return months[m]
}
