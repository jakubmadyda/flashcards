import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/v1';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json"
    },
    withCredentials: false
});
