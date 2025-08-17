// lib/axios.private.server.js

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://riaky.softvencefsd.xyz";
const ACCESS_TOKEN_KEY = process.env.AUTH_TOKEN_NAME || "chique_auth_token";

/**
 * Factory function to create Axios instance on server
 */
export async function axiosPrivateServer() {
    const cookieStore = await cookies();
    const token = cookieStore.get(ACCESS_TOKEN_KEY)?.value || null;

    const instance = axios.create({
        baseURL: `${baseURL}/api`,
        timeout: 30000,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    // Response interceptor for 401
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                // Remove the cookie
                cookieStore.delete(ACCESS_TOKEN_KEY);

                // Redirect to sign-in page
                redirect("/auth/sign-in");
            }
            return Promise.reject(error);
        }
    );

    return instance;
}

export default axiosPrivateServer;