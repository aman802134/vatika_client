import axios from "axios";

const APP_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: APP_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export default api;
