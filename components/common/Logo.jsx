"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className = "" }) => {
    return (
        <Link className={cn("sm:w-[193px] 3xs:w-[150px] w-[140px] h-14 shrink-0 flex justify-start items-center overflow-hidden", className)} href={"/"}>
            <Image
                src={"/images/logo/logo.png"}
                alt="Logo"
                width={210}
                height={56}
                priority
                style={{
                    width: 'auto', // if you modified height
                    height: 'auto' // if you modified width
                }}
                className="object-contain"
            />
        </Link>
    )
}

export default Logo