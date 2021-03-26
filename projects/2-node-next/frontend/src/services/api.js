import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export const addBearerToken = (token) => {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default api
