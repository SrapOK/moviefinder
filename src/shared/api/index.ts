import axios from "axios"
import {
  privateInterseptor,
  responseToBoolean
} from "./interseptors"

const $host = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, //import.meta.env.VITE_BASE_URL
  timeout: 1000
})

$host.interceptors.request.use(...privateInterseptor)
$host.interceptors.response.use(...responseToBoolean)

export default $host
