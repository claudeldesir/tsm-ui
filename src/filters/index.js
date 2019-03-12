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
  switch (val) {
    case 0:
      return 'Business'
    case 1:
      return 'Consumer'
    default:
      return '/'
  }
}

export function subscriptionStatusFilter(val) {
  switch (val) {
    case 0:
      return 'Expired'
    case 1:
      return 'Active'
    default:
      return '/'
  }
}

export function lineTitleFilter(val) {
  switch (val) {
    case 0:
      return 'Orange'
    case 1:
      return 'Blue'
    case 2:
      return 'Yellow'
    case 3:
      return 'Green'
    default:
      return '/'
  }
}

export function mediaTypeFilter(val) {
  switch (val) {
    case 0:
      return 'Youtube'
    case 1:
      return 'Image'
    default:
      return '/'
  }
}

export function yesnoFilter(val) {
  if (val) return 'Yes'
  return 'No'
}