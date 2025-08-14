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
    const commonStyle = "w-full cursor-pointer bg-primary-dark rounded-4xl px-4 sm:px-6 py-3 sm:py-4 flex justify-center min-h-[52px] items-center lg:text-xl md:font-semibold font-medium text-white relative capitalize"
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
                    {isLoading ? <Loader className={``} /> : children}
                </button>
            )}
        </>
    );
};
export default CommonBtn;