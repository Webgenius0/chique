"use client";
import { AuthContext } from "@/contexts";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getUserProfile } from "@/lib/api/get-user-profile";

const ACCESS_TOKEN_KEY = process.env.AUTH_TOKEN_NAME || "chique_auth_token";

export function AuthProvider({ children }) {
    const router = useRouter();
    const [accessToken, setAccessToken] = useState(() => Cookies.get(ACCESS_TOKEN_KEY) || null);

    const { data: userData, refetch: userRefetch, isFetching } = useQuery({
        queryKey: ["userData"],
        queryFn: () => getUserProfile(accessToken),
        enabled: !!accessToken,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        staleTime: 0,
        cacheTime: 0,
        onError: (error) => {
            console.error("Error fetching user data:", error);
            if (error.response?.status === 401) {
                Cookies.remove(ACCESS_TOKEN_KEY);
                setAccessToken(null);
                router.push("/auth/sign-in");
            }
        }
    });

    const isLoggedIn = !!userData && !!accessToken;
    const userRole = userData?.role;

    return (
        <AuthContext.Provider value={{
            userData,
            userRefetch,
            accessToken,
            userRole,
            isLoggedIn,
            setAccessToken,
            isLoading: !!accessToken && (isFetching || userData === undefined)
        }}>
            {children}
        </AuthContext.Provider>
    );
}
