import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_CMS_API,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${env.VITE_CMS_TOKEN}`

  return config
})
