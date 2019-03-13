import auth from '@/services/auth'
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
  getUsers() {
    return http.get('/users')
  },
  getSubscribers() {
    return http.get('/subscribers')
  },
  postSubscriber(subscriber) {
    return http.post('/subscribers', subscriber)
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
  postStation(station) {
    return http.post('/locations', station)
  },
  getActiveBusinesses() {
    return http.get('/businesses/active')
  },
  getMedia() {
    return http.get('/media')
  },
  postMedia(media) {
    return http.post('/media', media)
  },
}
