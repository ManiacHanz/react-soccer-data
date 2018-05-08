import axios from 'axios'
import { APP_KEY } from '../config/config'

const instance = axios.create({
  baseURL: 'http://localhost:8667',
  timeout: 10000,
  method: 'get',
  params:{
    key: APP_KEY,
  },
  data: {
    key: APP_KEY,
  }
})


export default instance