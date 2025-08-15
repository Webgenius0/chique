import axios from "axios";

export const useAxios = () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://riaky.softvencefsd.xyz";
    const axiosPublic = axios.create({
        baseURL: `${baseURL}/api`,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        },
        // withCredentials: true,
    });
    return axiosPublic;
};
