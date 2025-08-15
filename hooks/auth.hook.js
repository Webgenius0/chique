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
            Cookies.set(ACCESS_TOKEN_KEY, token, {
                expires: data?.data?.expires_in_minutes / (60 * 24),
            });
            setAccessToken(token); // 👈 updates state, triggers re-fetch
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
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "OTP verification failed");
        },
    });

    // ------------------- // Logout user mutation // -------------------
    const onLogout = () => {
        Cookies.remove(ACCESS_TOKEN_KEY);
        router.push('/auth/sign-in');
    }
    // Logout mutation
    const logout = useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            try {
                const token = Cookies.get(ACCESS_TOKEN_KEY);
                const response = await axiosPublic.post(
                    "/logout",
                    {}, // empty body
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
            toast.success(response?.data || "Logged out successfully");
            onLogout();
        },
        onError: (error) => {
            console.error(error);
            onLogout();
            toast.success("Logged out successfully"); // still show success
        },
        onSettled: () => {
            queryClient.clear();
            onLogout();
        },
    });

    return { login, register, verifyOtp, logout, onLogout };
};
