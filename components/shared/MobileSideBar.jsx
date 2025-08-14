"use client";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Logo from "../common/Logo";
import Link from "next/link";

const MobileSideBar = ({ toggleSidebar, isOpen }) => {
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
            className="fixed inset-y-0 left-0 w-full bg-background z-[1000] shadow-lg p-4"
          >
            {/* logo and close button */}
            <div className="w-full flex justify-between items-center mb-4">
              <Logo />
              <button
                onClick={toggleSidebar}
                className="cursor-pointer"
                aria-label="Close menu"
              >
                <RxCross2 className="text-3xl" />
              </button>
            </div>
            {/* mobile navigation items */}
            <div className="flex flex-col space-y-1 px-2">
              <Link
                href="/"
                onClick={toggleSidebar}
                className="hover:bg-primary-dark max-w-40 rounded-lg py-2.5 px-3 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={toggleSidebar}
                className="hover:bg-primary-dark max-w-40 rounded-lg py-2.5 px-3 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/#subscriptions"
                onClick={toggleSidebar}
                className="hover:bg-primary-dark max-w-40 rounded-lg py-2.5 px-3 hover:text-white"
              >
                Subscriptions
              </Link>
              <Link
                href="/contact"
                onClick={toggleSidebar}
                className="hover:bg-primary-dark max-w-40 rounded-lg py-2.5 px-3 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href={"/auth/sign-up"}
                onClick={toggleSidebar}
                className="hover:bg-primary-dark max-w-40 rounded-lg py-2.5 px-3 hover:text-white"
              >
                Sign Up
              </Link>
              <Link
                href={"/auth/sign-in"}
                onClick={toggleSidebar}
                className="hover:bg-primary-dark max-w-40 rounded-lg py-2.5 px-3 hover:text-white"
              >
                Log In
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

  );
};

export default MobileSideBar;
