import axios from "axios";
import { BASE_URL } from "./constants.js";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Ensures cookies are sent with requests
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// If you want to include the token in headers (as a fallback or in addition to cookies)
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("NoteToken"); 
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
