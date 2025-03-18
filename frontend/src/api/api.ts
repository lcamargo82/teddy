import axios from "axios";
import { API_URL } from "../environments/environments";

const apiBase = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiBase;