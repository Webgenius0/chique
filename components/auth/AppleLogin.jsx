"use client";
import Image from "next/image";
import google from "@/public/images/icons/google.png";
import apple from "@/public/images/icons/apple.png";
import { signIn, useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { useAxios } from "@/hooks/axios.hook";

const AppleLogin = () => {
    const axiosPublic = useAxios();
    const { data: session } = useSession();
    console.log("session", session);

    // apple login mutation for send token
    const appleMutation = useMutation({
        mutationFn: async (token) => {
            const response = await axiosPublic.post("/apple-authentication", { token });
            return response.data;
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success(data?.message || "Apple login successful");
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        },
    })
    // apple login
    return (
        <button
            onClick={() => signIn("apple")}
            className="w-full flex cursor-pointer border border-common-border rounded-[40px] bg-white py-3 px-4 sm:py-4 sm:px-5 text-primary-dark capitalize gap-3 sm:gap-5 justify-center items-center transition-all">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Image
                    src={apple}
                    alt='apple'
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 20px, 24px"
                />
            </div>
            <span className="text-base">Continue with Apple</span>
        </button>
    )
}

export default AppleLogin