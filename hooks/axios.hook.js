import axios from "axios";

export const useAxios = () => {
    const axiosPublic = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
        timeout: 30000,
        withCredentials: true,
    });
    return { axiosPublic };
};
