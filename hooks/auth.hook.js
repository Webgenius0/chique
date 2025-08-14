import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAxios } from "./axios.hook";
import { useRouter } from "next/router";

export const useAuth = () => {
    const { axiosPublic } = useAxios();
    const router = useRouter();
    // ------------------- // Login mutation // -------------------
    const login = useMutation({
        mutationKey: ["login"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/login", data, {
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "Logged in successfully");
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

    return { login, register, verifyOtp };
};
