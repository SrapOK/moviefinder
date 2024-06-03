import { InternalAxiosRequestConfig } from "axios"

export const privateInterseptor = [
  (config: InternalAxiosRequestConfig) => {
    const params = new URLSearchParams(config.url)

    params.set("apikey", import.meta.env.VITE_API_KEY)

    config.url = "?" + params.toString()

    return config
  },
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  (error: any) => {
    return Promise.reject(error)
  }
]
