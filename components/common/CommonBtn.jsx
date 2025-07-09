"use client"
import Loader from "@/components/common/Loader";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CommonBtn = ({
    children,
    type = "submit",
    link = false,
    className,
    path = "",
    isLoading = false,
    onclick,
    disabled = false,
}) => {
    const commonStyle = "w-full cursor-pointer bg-primary-dark rounded-4xl xs:p-4 p-3 flex justify-center min-h-[60px] items-center text-xl font-semibold text-white capitalize"
    return (
        <>
            {link ? (
                <Link href={path} className={cn(commonStyle, className)}  >
                    {children}
                </Link>
            ) : (
                <button
                    type={type}
                    disabled={disabled}
                    onClick={onclick}
                    className={cn(commonStyle, className)}
                >
                    {isLoading ? <Loader size={24} color="white" speed={1} /> : children}
                </button>
            )}
        </>
    );
};

export default CommonBtn;
