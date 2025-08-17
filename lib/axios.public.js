
import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://riaky.softvencefsd.xyz";
const axiosPublic = axios.create({
    baseURL: `${baseURL}/api`,
    timeout: 30000,
    headers: { "Content-Type": "application/json" },
});

export default axiosPublic;