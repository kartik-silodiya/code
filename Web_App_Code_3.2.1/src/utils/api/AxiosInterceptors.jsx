import axios from 'axios'
import { store } from '../../components/store/store'

const Api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_END_POINT}/`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

Api.interceptors.request.use(function (config) {
  let token = undefined

  if (typeof window !== 'undefined') {
    const state = store.getState()
    token = state?.user?.data?.token
  }

  if (token) config.headers.authorization = `Bearer ${token}`

  return config
})

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK') {
      console.warn('API request timeout or network error:', error.message)
    }
    return Promise.reject(error)
  }
)

export default Api
