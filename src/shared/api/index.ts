import axios from "axios"
import { privateInterseptor } from "./interseptors"

const $host = axios.create({
  baseURL: "foo", //import.meta.env.VITE_BASE_URL
  timeout: 1000
})

$host.interceptors.request.use(...privateInterseptor)

export default $host
