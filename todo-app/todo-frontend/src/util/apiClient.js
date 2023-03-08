import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080/api/',
})

export default apiClient