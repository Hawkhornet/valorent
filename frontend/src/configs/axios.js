import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL || "https://localhost:3001"
})

export default api