import axios from "axios";
import { cookies } from "next/headers";

let axiosPublicInstance;
let axiosSecureInstance;

export const useAxios = (onUnauthorized) => {
    if (!axiosPublicInstance) {
        axiosPublicInstance = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
            timeout: 30000,
        });

        axiosPublicInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (axios.isCancel(error)) return Promise.reject(error);

                if (typeof window !== "undefined") {
                    import("react-hot-toast").then(({ toast }) => {
                        if (error.response?.status >= 500) {
                            toast.error(
                                error.response.data?.message ||
                                "Our servers are having issues. Please try again later."
                            );
                        } else if (error.request) {
                            toast.error("Network connection issue. Please check your internet.");
                        }
                    });
                }

                return Promise.reject(error);
            }
        );
    }

    if (!axiosSecureInstance) {
        let token = null;

        if (typeof window === "undefined") {
            token = cookies().get(process.env.AUTH_TOKEN_NAME)?.value || null;
        } else {
            const match = document.cookie.match(
                new RegExp(`(^| )${process.env.AUTH_TOKEN_NAME}=([^;]+)`)
            );
            token = match ? match[2] : null;
        }

        axiosSecureInstance = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
            timeout: 30000,
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        axiosSecureInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (axios.isCancel(error)) return Promise.reject(error);
                if (typeof window !== "undefined") {
                    import("react-hot-toast").then(({ toast }) => {
                        if (error.response?.status === 401 && typeof onUnauthorized === "function") {
                            toast.error("Session expired. Please log in again.");
                            onUnauthorized(); 
                        } else if (error.response?.status >= 500 && error.response.status < 600) {
                            toast.error(error.response.data?.message || "Server error occurred");
                        } else if (error.request && !error.config?.silent) {
                            toast.error("Network error. Please check your connection.");
                        }
                    });
                }

                return Promise.reject(error);
            }
        );
    }

    return { axiosPublic: axiosPublicInstance, axiosSecure: axiosSecureInstance };
};
