"use client"
import { FaBars } from "react-icons/fa6"
import { usePathname } from "next/navigation"

const NavBar = ({ setIsOpen }) => {
    const pathname = usePathname()
    const handleToggle = () => setIsOpen(prev => !prev)
    // Map paths to page names
    const getPageTitle = () => {
        switch (pathname) {
            case "/dashboard": return "Chat"
            case "/dashboard/my-clothes": return "My Clothes"
            case "/dashboard/explore": return "Explore"
            case "/dashboard/feedback": return "Feed Back"
            default: return "" // default case
        }
    }
    return (
        <div className="w-full shrink-0 px-5 py-2 flex justify-start items-center gap-4 h-20 border-b border-primary-dark">
            <button onClick={handleToggle} type="button" className="cursor-pointer">
                <FaBars className="text-2xl text-primary-dark" />
            </button>
            <h1 className="text-2xl font-bold capitalize text-primary-dark font-secondary">
                {getPageTitle()}
            </h1>
        </div>
    )
}

export default NavBar