"use client"
import { cn } from "@/lib/utils"
const AuthTitle = ({ className = "", title = "" }) => {
    return (
        <p className={cn("xl:text-3xl xs:text-2xl text-xl font-semibold text-center text-primary-dark", className)}>{title}</p>
    )
}

export default AuthTitle