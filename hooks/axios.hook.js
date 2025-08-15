import axios from "axios";

export const useAxios = () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";
    const axiosPublic = axios.create({
        baseURL: `${baseURL}/api`,
        timeout: 30000,
        withCredentials: true,
    });
    return axiosPublic;
};
