import axios from "axios";


const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: { 'Content-Type': 'application/json' },
    timeout: 60 * 1000,
});

export {axiosInstance}
