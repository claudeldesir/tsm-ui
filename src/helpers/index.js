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
  }
}