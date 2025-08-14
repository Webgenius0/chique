import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "./axios.hook";
import { toast } from "react-hot-toast";

export const useLogout = () => {
    const queryClient = useQueryClient();

    // call hook at top level
    const { axiosSecure } = useAxios(() => logout());

    const logOutMutation = useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            try {
                const response = await axiosSecure.post("/logout");
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

    return { logout };
};
