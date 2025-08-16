import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAxios } from "./axios.hook";
import Cookies from "js-cookie";
import { useUser } from "./get-user.hook";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    // ------------------- // task after login // -------------------
    const onLogin = (token, expires_in_minutes) => {
        setAuthCookie(token, expires_in_minutes);
        setAccessToken(token);
        router.push("/dashboard");
    }
    // ------------------- // task after logout // -------------------
    const onLogout = () => {
        Cookies.remove(ACCESS_TOKEN_KEY, { path: "/" });
        router.push('/auth/sign-in');
    };
    // ------------------- // Login mutation // -------------------
    const login = useMutation({
        mutationKey: ["login"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/login", data);
            return response.data;
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success(data?.message || "Logged in successfully");
            onLogin(data?.data?.chique_auth_token, data?.data?.expires_in_minutes);
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Login failed");
        },
    });
    // ------------------- // Apple login mutation // -------------------
    const appleMutation = useMutation({
        mutationFn: async (token) => {
            const response = await axiosPublic.post("/apple-authentication", { token });
            return response.data;
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success(data?.message || "Apple login successful");
            // onLogin(data?.data?.token, data?.data?.expires_in_minutes);
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        },
    })
    // ------------------- // Google login mutation // -------------------
    const googleMutation = useMutation({
        mutationFn: async (token) => {
            const response = await axiosPublic.post("/google-authentication", { token });
            return response.data;
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success(data?.message || "Google login successful");
            // onLogin(data?.data?.token, data?.data?.expires_in_minutes);
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        },
    })
    // ------------------- // Register mutation // -------------------
    const register = useMutation({
        mutationKey: ["register"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/register", data);
            return response.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "Otp sent successfully");
            const email = data?.data?.email;
            const otp = data?.data?.otp;
            // ⚡ store only for this session
            sessionStorage.setItem("verifyEmail", email);
            sessionStorage.setItem("verifyOtp", otp);
            router.push("/auth/user-verification");
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Registration failed");
        },
    });
    // ------------------- // Verify registered user mutation // -------------------
    const verifyOtp = useMutation({
        mutationKey: ["verifyOtp"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/register-otp-verify", data);
            return response.data;
        },
        onSuccess: (data) => {
            setAuthCookie(data?.data?.token, data?.data?.expires_in_minutes);
            setAccessToken(data?.data?.token);
            sessionStorage.removeItem("verifyEmail");
            sessionStorage.removeItem("verifyOtp");
            toast.success(data?.message || "OTP verified successfully");
            router.push("/dashboard");
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "OTP verification failed");
        },
    });
    //  Resend OTP mutation --- for forgot password
    const resendOtp = useMutation({
        mutationKey: ["resendOtp"],
        mutationFn: async (data) => {
            const response = await axiosPublic.post("/resend-otp", data)
            return response.data
        },
        onSuccess: (res) => {
            toast.success(res?.message || "OTP resent successfully");
            const otp = data?.data?.otp;
            // sessionStorage.setItem("verifyOtp", otp);
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        },
    });
    // ------------------- // Logout user mutation // -------------------
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
    // ------------------- // Return all auth hooks // -------------------
    return {
        login,
        googleMutation,
        appleMutation,
        register,
        verifyOtp,
        resendOtp,
        logout,
        onLogout,
        setAuthCookie
    };
};
