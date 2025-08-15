"use client"
import { AuthContext } from "@/contexts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
const ACCESS_TOKEN_KEY = process.env.AUTH_TOKEN_NAME || "chique_auth_token";
export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(() => Cookies.get(ACCESS_TOKEN_KEY) || null);
    const { data: userData, refetch: userRefetch, isFetching } = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            if (!accessToken) return null;
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`,
                    {
                        headers: { Authorization: `Bearer ${accessToken}` },
                    }
                );
                return response?.data?.data || null;
            } catch (error) {
                console.error("Error fetching user data:", error);
                if (error.response?.status === 401) {
                    Cookies.remove(ACCESS_TOKEN_KEY);
                    setAccessToken(null);
                }
                return null;
            }
        },
        enabled: !!accessToken,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        staleTime: 0,
        cacheTime: 0,
    });

    const isLoggedIn = (userData && accessToken) ? true : false;
    const userRole = userData?.role
    return (
        <AuthContext.Provider value={{
            userData,
            userRefetch,
            accessToken,
            userRole,
            isLoggedIn,
            isLoading: !!accessToken && (isFetching || userData === undefined)
        }}>
            {children}
        </AuthContext.Provider>
    )
}
