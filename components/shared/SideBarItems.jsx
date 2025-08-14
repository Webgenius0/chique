import { BsChatDots } from "react-icons/bs";
import { GrCoatCheck } from "react-icons/gr";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import NavLink from "../common/NavLink";

const SideBarItems = ({ setIsModalOpen }) => {
    const navItems = [
        {
            path: "/dashboard",
            name: "Chat",
            icon: <BsChatDots />,
            end: true,
        },
        {
            path: "/dashboard/my-clothes",
            name: "My Clothes",
            icon: <GrCoatCheck />,
        },
        {
            path: "/dashboard/explore",
            name: "Explore",
            icon: <FaGlobeAmericas />,
        },
        {
            path: "/dashboard/feedback",
            name: "Feedback",
            icon: <MdOutlineMessage />,
        },
    ];
    // nav 
    return (
        <nav className="w-full pl-3 py-8 h-screen flex flex-col justify-start gap-1 overflow-y-auto">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    href={item.path}
                    end={item.end}
                    className="w-full rounded-tl-sm text-xl rounded-bl-sm px-4 py-3 flex justify-start items-center gap-3 transition-colors duration-300"
                    activeClassName="bg-primary-dark text-white"
                    inactiveClassName="text-primary-dark hover:bg-primary-dark hover:text-white"
                >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <span>{item.name}</span>
                </NavLink>
            ))}

            {/* Sign Out Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-full cursor-pointer text-left text-primary-dark hover:bg-primary-dark hover:text-white rounded-tl-sm text-xl rounded-bl-sm px-4 py-3 flex justify-start items-center gap-3 transition-colors duration-300"
            >
                <span className="text-2xl shrink-0">
                    <PiSignOutBold className="text-[26px]" />
                </span>
                <span>Sign Out</span>
            </button>
        </nav>
    )
}

export default SideBarItems