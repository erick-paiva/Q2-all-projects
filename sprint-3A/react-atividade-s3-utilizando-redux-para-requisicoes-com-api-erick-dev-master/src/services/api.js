import axios from "axios";

const api = axios.create({
    baseURL:"https://digimon-api.vercel.app"
})

export default api