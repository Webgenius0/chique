// hooks/get-categories.hook.js
import { getCategories } from "@/lib/api/get-categories";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useSubscription = () => {
    const axiosInstance = axiosPrivateClient();
    // purchase subscription
    const purchaseSubscription = useMutation({
        mutationKey: ["purchase-subscription"],
        mutationFn: async (plan_id) => {
            const response = await axiosInstance.post("/subscription/purchase", {
                plan_id: plan_id
            })
            return response.data
        },
        onSuccess: (response) => {
            toast.success(response?.message || "Subscription created successfully");
            console.log(response);
            if (response?.data?.checkout_url) {
                window.location.href = response.data.checkout_url;
            } else {
                toast.error('Failed to checkout, please try again.');
            }
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "Something went wrong");
        }
    })
    // 


    // all return
    return {
        purchaseSubscription
    };
};