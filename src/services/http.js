import axios from 'axios'

const http = axios.create({
  baseURL: '/api'
})

// 401 response interceptor
http.interceptors.response.use(response =>
  response, (error) => {
  if (error.response.status === 401 && !window.location.href.includes('login')) {
    document.location.href = '/login'
  }
  return Promise.reject(error)
})

export default http