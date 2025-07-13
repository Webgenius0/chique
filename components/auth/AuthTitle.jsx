"use client"
import { cn } from "@/lib/utils"
const AuthTitle = ({ className = "", title = "" }) => {
    return (
        <p className={cn("lg:text-3xl text-xl font-semibold text-center text-primary-dark", className)}>{title}</p>
    )
}

export default AuthTitle