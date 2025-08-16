"use client"
import { FaBars, FaUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useUser } from "@/hooks/get-user.hook";
import default_user_image from "@/public/images/default.jpg"
const NavBar = ({ setIsOpen }) => {
    const pathname = usePathname();
    const { userData } = useUser();
    const handleToggle = () => setIsOpen((prev) => !prev);
    // Map paths to page names
    const getPageTitle = () => {
        switch (pathname) {
            case "/dashboard": return "Chat";
            case "/dashboard/my-clothes": return "My Clothes";
            case "/dashboard/explore": return "Explore";
            case "/dashboard/feedback": return "Feedback";
            default: return "";
        }
    };

    return (
        <nav className="w-full shrink-0 px-6 py-3 flex justify-between items-center gap-4 h-20 border-b border-black/90">
            {/* Left Section */}
            <div className="flex w-full items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={handleToggle}
                    type="button"
                    className="cursor-pointer xl:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition"
                >
                    <FaBars className="text-2xl text-gray-700" />
                </button>

                {/* Page Title */}
                <h1 className="text-2xl font-bold capitalize text-gray-800 font-secondary tracking-wide">
                    {getPageTitle()}
                </h1>
            </div>
            {/* Right Section - User Info */}
            <div className="flex shrink-0 items-center gap-3 px-3 py-2  hover:bg-gray-50 transition">
                <div className="size-12 shrink-0 border flex justify-center items-center border-gray-200 rounded-full ">
                    {
                        userData?.avatar ? (
                            <img
                                src={userData?.avatar}
                                alt="User Avatar"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <FaUser className="text-2xl" />
                        )
                    }
                </div>
                <span className="text-lg hidden 3xs:block line-clamp-1 font-medium text-gray-800">
                    {userData?.name || "Guest"}
                </span>
            </div>
        </nav>
    );
};

export default NavBar;
