"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import NavItems from "./NavItems";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import MobileSideBar from "./MobileSideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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

  // main component
  return (
    <>
      {/* desktop header */}
      <header className="w-full sm:py-4 py-3 text-base font-secondary capitalize border-b font-medium backdrop-blur-md border-[#2E2125] sticky top-0 bg-background z-[500]">
        <div className="container flex gap-6 justify-between items-center">
          <div className="md:w-fit w-full flex items-center md:gap-2 justify-between">
            <Logo />
            <button
              onClick={toggleSidebar}
              className="cursor-pointer md:hidden"
              aria-label="Toggle menu"
            >
              <IoMenu className="text-4xl text-[#0d0e10b4]" />
            </button>
          </div>
          <NavItems />
          <div className="hidden md:flex sm:gap-5 gap-3 justify-end items-center shrink-0">
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
      <MobileSideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
