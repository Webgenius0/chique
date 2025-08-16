import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAxios } from "./axios.hook";
import Cookies from "js-cookie";
import { useUser } from "./get-user.hook";
import { useRouter } from "next/navigation";

export const useAuth = () => {
    const axiosPublic = useAxios();
    const { setAccessToken } = useUser();
    const queryClient = useQueryClient();
    const router = useRouter();
    const ACCESS_TOKEN_KEY = process.env.AUTH_TOKEN_NAME || "chique_auth_token";

    // ------------------- // Set auth cookie // -------------------
    const setAuthCookie = (token, expiresInMinutes) => {
        Cookies.set(ACCESS_TOKEN_KEY, token, {
            expires: expiresInMinutes / (60 * 24), // days
            path: "/", // available everywhere
            secure: process.env.NODE_ENV === "production", // required for HTTPS in production
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // cross-site support in prod
        });
    };

    // ------------------- // Login mutation // -------------------
    const login = useMutation({
        mutationKey: ["login"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/login", data);
            return response.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "Logged in successfully");
            const token = data?.data?.chique_auth_token;
            setAuthCookie(token, data?.data?.expires_in_minutes);
            setAccessToken(token);
            router.push("/dashboard");
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Login failed");
        },
    });

    // ------------------- // Register mutation // -------------------
    const register = useMutation({
        mutationKey: ["register"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/user/register", data);
            return response.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "Registered successfully");
            localStorage.setItem("verify_email", data?.email);
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Registration failed");
        },
    });

    // ------------------- // Verify registered user mutation // -------------------
    const verifyOtp = useMutation({
        mutationKey: ["verifyOtp"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/user/verify-user", data);
            return response.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "OTP verified successfully");
            // If token is returned here, store it immediately
            if (data?.data?.chique_auth_token) {
                setAuthCookie(data?.data?.chique_auth_token, data?.data?.expires_in_minutes);
                setAccessToken(data?.data?.chique_auth_token);
                router.push("/dashboard");
            }
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "OTP verification failed");
        },
    });

    // ------------------- // Logout user mutation // -------------------
    const onLogout = () => {
        Cookies.remove(ACCESS_TOKEN_KEY, { path: "/" });
        router.push('/auth/sign-in');
    };

    const logout = useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            try {
                const token = Cookies.get(ACCESS_TOKEN_KEY);
                const response = await axiosPublic.post(
                    "/logout",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                return response?.data;
            } catch (error) {
                console.error("Logout API error:", error);
                return null;
            }
        },
        onSuccess: (response) => {
            toast.success(response?.message || "Logged out successfully");
            onLogout();
        },
        onError: (error) => {
            console.error(error);
            onLogout();
            toast.success("Logged out successfully");
        },
        onSettled: () => {
            queryClient.clear();
            onLogout();
        },
    });

    return { login, register, verifyOtp, logout, onLogout, setAuthCookie };
};
