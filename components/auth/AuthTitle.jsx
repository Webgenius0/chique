"use client"
import { cn } from "@/lib/utils"
const AuthTitle = ({ className = "", title = "" }) => {
    return (
        <p className={cn("text-3xl font-semibold text-center text-primary-dark", className)}>{title}</p>
    )
}

export default AuthTitle