"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import { usePathname } from "next/navigation";
import { BsChatDots } from "react-icons/bs";
import { PiCoatHangerBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const SideBar = ({ isOpen = false, onClose }) => {
  const pathname = usePathname();
  const navItems = [
    {
      path: "/dashboard",
      name: "Chat",
      icon: <BsChatDots className="text-2xl" />,
    },
    {
      path: "/dashboard/my-clothes",
      name: "My Clothes",
      icon: <PiCoatHangerBold className="text-2xl" />,
    },
    {
      path: "/dashboard/explore",
      name: "Explore",
      icon: <FaGlobeAmericas className="text-2xl" />,
    },
    {
      path: "/dashboard/feedback",
      name: "Feedback",
      icon: <IoIosTime className="text-3xl" />,
    },
  ];
  return (
    <aside
      className={`
                w-64 flex bg-[#FAFAFB] flex-col justify-start xl:static fixed overflow-y-auto shrink-0 transition-all duration-500 ease-in-out
                ${
                  isOpen
                    ? " xl:-ml-64 translate-x-0"
                    : " xl:ml-0 -translate-x-full"
                }
                xl:translate-x-0 z-[500]
        `}
    >
      {/* LOGO */}
      <div className="w-full h-20 shrink-0 sticky top-0 flex justify-center items-center border-b p-2 overflow-hidden border-b-primary-dark">
        <Logo className="w-full h-full justify-center md:mr-3 -mr-12" />
        {/* cross button  */}
        <button
          onClick={onClose}
          className="xl:hidden text-2xl text-primary-dark"
        >
          <RxCross2 />
        </button>
      </div>
      {/* NAV ITEMS */}
      <nav className="w-full pl-6 py-8 h-screen flex flex-col justify-start gap-3 overflow-y-auto ">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={` w-full rounded-tl-lg text-xl rounded-bl-lg px-4 py-3 flex justify-start items-center gap-3 transition-colors duration-300 ${
                isActive
                  ? "bg-primary-dark text-white"
                  : "text-primary-dark hover:bg-primary-dark hover:text-white"
              }`}
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
        <Link
          href={`/`}
          className={` w-full hover:bg-primary-dark hover:text-white rounded-tl-lg text-xl rounded-bl-lg px-4 py-3 flex justify-start items-center gap-3 transition-colors duration-300`}
        >
          <span className="text-2xl shrink-0">
            <PiSignOutBold className="text-[26px]" />
          </span>
          <span>Sign Out</span>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
