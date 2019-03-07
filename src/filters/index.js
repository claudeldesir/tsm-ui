const moment = require('moment')

export function dateFilter(val, fmt) {
  let format = fmt
  if (!val) return ''
  if (!fmt) {
    format = 'DD MMM YYYY HH:mm:ss'
  }
  return moment(val).format(format)
}

export function subscriberTypeFilter(val) {
  switch(val) {
    case 0:
      return 'Business'
    case 1:
      return 'Consumer'
    default:
      return '/'
  }
}