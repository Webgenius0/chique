"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import NavItems from "./NavItems";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 }
  };

  const overlayVariants = {
    open: { opacity: 1, pointerEvents: "auto" },
    closed: { opacity: 0, pointerEvents: "none" }
  };

  useEffect(() => {
    // Function to handle media query change
    const handleMediaChange = (e) => {
      if (e.matches) {
        // If screen is md or larger, close the sidebar
        setIsOpen(false);
      }
    };
    // Set up media query listener
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaChange);
    // Also check on initial render
    if (mediaQuery.matches) {
      setIsOpen(false);
    }
    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <>
      {/* desktop header */}
      <header className="w-full md:py-3 py-2 text-base font-secondary capitalize border-b font-medium backdrop-blur-md border-[#2E2125] sticky top-0 bg-background z-[500]">
        <div className="container flex gap-6 justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              className="cursor-pointer md:hidden"
              aria-label="Toggle menu"
            >
              <MdOutlineMenuOpen className="text-2xl" />
            </button>
            <Logo />
          </div>
          <NavItems />
          <div className="flex sm:gap-5 gap-3 justify-end items-center shrink-0">
            <Link href={"/auth/sign-up"}>Sign Up</Link>
            <Link
              href={"/auth/sign-in"}
              className="rounded-sm px-5 sm:py-2 py-1.5 font-semibold flex justify-center items-center border border-primary-dark"
            >
              Log In
            </Link>
          </div>
        </div>
      </header>

      {/* mobile sidebar */}
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
              <div className="flex justify-between items-center mb-4">
                <Logo />
                <button
                  onClick={toggleSidebar}
                  className="cursor-pointer"
                  aria-label="Close menu"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>
              {/* mobile navigation items */}
              <div className="flex flex-col space-y-4">
                <Link href="/" onClick={toggleSidebar}>Home</Link>
                <Link href="/#about" onClick={toggleSidebar}>About</Link>
                <Link href="/#pricing" onClick={toggleSidebar}>Pricing</Link>
                <Link href="/contact" onClick={toggleSidebar}>Contact</Link>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 bg-black/60 z-[999]"
              onClick={toggleSidebar}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;