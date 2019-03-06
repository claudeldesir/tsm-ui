import http from './http'

export default {
  listChatMessages() {
    return http.get('/chat')
  },
  postChatMessage(message) {
    return http.post('/chat', message)
  }
}
