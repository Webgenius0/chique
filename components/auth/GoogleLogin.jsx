"use client"
import Image from "next/image";
import google from "@/public/images/icons/google.png";

const GoogleLogin = () => {
    // google login mutation for send token
    
    // google login
    return (
        <button
            className="w-full flex cursor-pointer border border-common-border rounded-[40px] bg-white py-3 px-4 sm:py-4 sm:px-5 text-primary-dark capitalize gap-3 sm:gap-5 justify-center items-center transition-all">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Image
                    src={google}
                    alt='Google'
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 20px, 24px"
                />
            </div>
            <span className="text-base">Continue with Google</span>
        </button>
    )
}

export default GoogleLogin