import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAxios } from "./axios.hook";
import Cookies from "js-cookie";

export const useAuth = () => {
    const axiosPublic = useAxios();
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
            Cookies.set(ACCESS_TOKEN_KEY, data?.data?.chique_auth_token, {
                expires: data?.data?.expires_in_minutes / (60 * 24), // Convert to days
            });
            // Add redirect logic here
            navigate('/dashboard');
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
    // ------------------- // verify registered user mutation // -------------------
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
    // ------------------- // logout  user mutation // -------------------
    const logOutMutation = useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            try {
                const response = await axiosPublic.post("/logout",
                    {},
                    {
                        withCredentials: true
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
        },
        onError: (error) => {
            console.log(error);
            toast.success("Logged out successfully"); // still show success
        },
        onSettled: () => {
            queryClient.clear();
        },
    });
    const logout = async () => {
        await logOutMutation.mutateAsync();
    };


    // all return
    return { login, register, verifyOtp, logout };
};
