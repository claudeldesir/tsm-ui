import url from 'url'

const SERVER_URL = 'https://thatsmontreal.ca:8000' // this is bad

export default {
  isValidUrl(str) {
    const result = url.parse(str)
    const hasProtocol = !!result.protocol
    return hasProtocol
  },
  getImageUrl(imageUrl) {
    if (this.isValidUrl(imageUrl)) return imageUrl
    return `${SERVER_URL}${imageUrl}`
  },
  getNumberId(key, value) {
    const id = Number.parseInt(value, 10)
    if (Number.isNaN(id)) {
      return 0
    }
    const retObj = {}
    retObj[key] = id
    return retObj
  },
  reduceStringSize(str, limit) {
    const LIMIT = limit > 3 ? limit : 20
    if (str.length > LIMIT) {
      const string = str.substring(0, LIMIT - 3)
      return `${string}...`
    }
    return str
  },
}