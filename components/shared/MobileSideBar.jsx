"use client";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Logo from "../common/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/hooks/get-user.hook";
import { FaUser } from "react-icons/fa6";
import LanguageSection from "./LanguageSection";

const MobileSideBar = ({ toggleSidebar, isOpen }) => {
  const { userData, isLoggedIn } = useUser(); // 👈 get user info
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Subscription", path: "/#subscriptions" },
    { name: "Contact", path: "/contact" },
  ];
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };
  // main content 
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "tween", ease: "easeInOut" }}
            className="fixed flex flex-col top-0 bottom-0 left-0 h-screen  w-2xs lg:w-full bg-background z-[1000] shadow-lg p-4"
          >
            {/* logo and close button */}
            <div className="w-full shrink-0 flex justify-between items-center mb-6">
              <Logo />
              <button
                onClick={toggleSidebar}
                className="cursor-pointer"
                aria-label="Close menu"
              >
                <RxCross2 className="text-2xl" />
              </button>
            </div>
            {/* mobile navigation items */}
            <div className="flex  flex-col w-full space-y-1 h-full ">
              <div className="w-full mb-5 flex justify-end items-center">
                <LanguageSection className={`w-full`} />
              </div>
              {/* nav links */}
              {
                navItems?.map((item, index) => (
                  <Link
                    href={item.path}
                    key={index}
                    onClick={toggleSidebar}
                    className={` hover:bg-primary-dark rounded w-full p-3  hover:text-white ${pathname === item.path ? "bg-primary-dark text-white" : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                ))
              }
              {/* auth links if not logged in */}
              {
                !isLoggedIn && (
                  <>
                    <Link
                      href={"/auth/sign-up"}
                      onClick={toggleSidebar}
                      className="hover:bg-primary-dark rounded w-full p-3  hover:text-white"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href={"/auth/sign-in"}
                      onClick={toggleSidebar}
                      className="hover:bg-primary-dark rounded w-full p-3  hover:text-white"
                    >
                      Log In
                    </Link>
                  </>
                )
              }
            </div>
            {/* user profile */}
            {
              isLoggedIn && (
                <Link prefetch={true} href={"/dashboard/my-profile"} className="flex items-center gap-3 shrink-0">
                  <div className="size-12 shrink-0 border flex justify-center items-center border-gray-500 overflow-hidden rounded-full">
                    {
                      userData?.user?.avatar ? (
                        <img
                          src={userData?.user?.avatar}
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaUser className="sm:text-xl text-sm" />
                      )
                    }
                  </div>
                  <span className="text-lg hidden 3xs:block line-clamp-1 font-medium text-gray-800">
                    {userData?.user?.name || "Guest"}
                  </span>
                </Link>
              )
            }
          </motion.div>
        </>
      )}
    </AnimatePresence>

  );
};

export default MobileSideBar;
