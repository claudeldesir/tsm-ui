import url from 'url'

export default {
  isValidUrl(str) {
    const result = url.parse(str)
    const hasProtocol = !!result.protocol
    return hasProtocol
  },
  getImageUrl(imageUrl) { // deprecate?
    if (this.isValidUrl(imageUrl)) return imageUrl
    return `${imageUrl}`
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
    if (!str) return ''
    const LIMIT = limit > 3 ? limit : 20
    if (str.length > LIMIT) {
      const string = str.substring(0, LIMIT - 3)
      return `${string}...`
    }
    return str
  },
}