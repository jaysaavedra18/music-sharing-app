import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// Create an Axios instance with a base URL from environment variables
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Add a request interceptor to the Axios instance
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        // If the token exists, set the Authorization header
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
