import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.0.12:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})