"use client";
import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getUserProfile } from "@/lib/api/get-user-profile";
import { AuthContext } from "@/contexts";
const ACCESS_TOKEN_KEY = process.env.AUTH_TOKEN_NAME || "chique_auth_token";

export default function AuthProvider({ children, serverUserData = null, serverAccessToken = null }) {
    const router = useRouter();
    // Use server data as initial state
    const [accessToken, setAccessToken] = useState(() => {
        return serverAccessToken || Cookies.get(ACCESS_TOKEN_KEY) || null;
    });
    const { data: userData, refetch: userRefetch, isFetching } = useQuery({
        queryKey: ["userData"],
        queryFn: () => getUserProfile(accessToken),
        enabled: !!accessToken,
        initialData: serverUserData, // hydrate server data
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
        },
    });

    const isLoggedIn = !!userData && !!accessToken;
    const userRole = userData?.role;

    return (
        <AuthContext.Provider
            value={{
                userData,
                userRefetch,
                accessToken,
                setAccessToken,
                userRole,
                isLoggedIn,
                isLoading: !!accessToken && (isFetching || userData === undefined),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
