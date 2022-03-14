import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-hamburgueria-5c28.herokuapp.com/",
});
