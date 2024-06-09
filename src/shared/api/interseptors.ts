import {
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios"
import { ErrorResponse, FilmsResponse } from "./films"
import { Film } from "store/slices/Films"

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

export const responseToBoolean = [
  (
    response: AxiosResponse<
      Film | ErrorResponse | FilmsResponse
    >
  ) => {
    response.data.Response =
      response?.data.Response === "True" ? true : false
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
]
