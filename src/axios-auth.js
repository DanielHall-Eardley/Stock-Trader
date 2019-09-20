import axios from "axios"

const customHTTP = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1"
})

export default customHTTP
