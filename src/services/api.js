import auth from './auth'
import http from './http'

const getAuthHeaders = (opts) => {
  const options = opts || {}
  return auth.getUserToken()
    .then(token => ({
      ...options,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }))
}

export default {
  listChatMessages() {
    return http.get('/chat')
  },
  postChatMessage(message) {
    return getAuthHeaders()
      .then(options => http.post('/chat', message, options))
  },
  getUser() {
    return getAuthHeaders()
      .then(options => http.get('/auth', options))
      .then(resp => resp.data)
  },
  getUsers() {
    return http.get('/users')
  },
  getSubscribers() {
    return http.get('/subscribers')
  },
  postSubscriber(subscriber) {
    return http.post('/subscribers', subscriber)
  },
  updateSubscriber(subscriber) {
    return http.put('/subscribers', subscriber)
  },
  getPackages() {
    return http.get('/packages')
  },
  getSubscriptions() {
    return http.get('/subscriptions')
  },
  postSubscription(subscription) {
    return http.post('/subscriptions', subscription)
  },
  getLines() {
    return http.get('/lines')
  },
  getStations() {
    return http.get('/locations')
  },
  getDotStations() {
    return http.get('/dots')
  },
  updateDotStation(dotStation) {
    const dotStationObj = {
      stationId: dotStation.stationId
    }
    return http.put(`/dots/${dotStation.id}`, dotStationObj)
  },
  getStation(stationId) {
    return http.get(`/locations/${stationId}`)
      .then(resp => resp.data)
  },
  postStation(station) {
    return http.post('/locations', station)
  },
  deleteStation(stationId) {
    return http.delete(`/locations/${stationId}`)
  },
  getActiveBusinesses() {
    return http.get('/businesses/active')
  },
  getMedia() {
    return http.get('/media')
  },
  getMediaForLocation(stationId) {
    return http.get(`/locations/${stationId}/media`)
      .then(resp => resp.data)
  },
  getOneMedia(mediaId) {
    return http.get(`/media/${mediaId}`)
  },
  postMedia(media) {
    return http.post('/media', media)
  },
  deleteMedia(mediaId) {
    return http.delete(`/media/${mediaId}`)
  },
  postPromo(promo, mediaId) {
    return http.post(`/media/${mediaId}/promos`, promo)
  },
  postPromoImages(promoImages, promoId) {
    const promoImagesMeta = []
    const formData = new FormData()

    promoImages.forEach((fileObj, index) => {
      const fileMetadata = fileObj.metadata
      if (index === 0) { // maybe handle this differently in the future
        fileMetadata.featured = true
      }
      const file = fileObj.file

      promoImagesMeta.push(fileMetadata)
      formData.append(fileMetadata.id, file)
    })
    formData.append('promoImagesMeta', JSON.stringify(promoImagesMeta))

    return fetch(`/api/promos/${promoId}/images`, {
      method: 'POST',
      body: formData
    })
  },
  updatePromo(promo) {
    return http.put(`/promos/${promo.id}`, promo)
  },
  deletePromo(promoId) {
    return http.delete(`/promos/${promoId}`)
  },
  getCodes(promoId) {
    let opts = {}
    if (promoId) {
      const params = { promoId }
      opts = { params }
    }
    return getAuthHeaders(opts)
      .then(options => http.get('/codes', options))
      .then(resp => resp.data)
  },
  reqPromoCode(promoId) {
    return getAuthHeaders()
      .then(options => http.post('/req-code', { promoId }, options))
  },
  banCode(code) {
    return getAuthHeaders()
      .then(options => http.post('/ban-code', { code }, options))
  },
  getAds() {
    return http.get('/ads')
  },
  getAd(adId) {
    return http.get(`/ads/${adId}`)
  },
  postAd(adObj) {
    const formData = new FormData()

    adObj.adImages.forEach((fileObj, index) => {
      const file = fileObj.file
      formData.append(`img-${index}`, file)
    })
    formData.append('ad', JSON.stringify(adObj.ad))

    return getAuthHeaders()
      .then(options => fetch('/api/ads', {
        method: 'POST',
        body: formData,
        headers: options.headers
      }))
  },
  contactUs(contactObj) {
    return http.post('/contact-us', contactObj)
  }
}