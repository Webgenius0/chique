"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import NavItems from "./NavItems";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import MobileSideBar from "./MobileSideBar";
import { useUser } from "@/hooks/get-user.hook";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, isLoggedIn } = useUser(); // 👈 get user info

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleMediaChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaChange);
    if (mediaQuery.matches) setIsOpen(false);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <>
      {/* desktop header */}
      <header className="w-full sm:py-4 py-3 text-base font-secondary capitalize border-b font-medium backdrop-blur-md border-[#2E2125] sticky top-0 bg-background z-[500]">
        <div className="container flex gap-6 justify-between items-center">
          {/* Left: Logo + Mobile Menu */}
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

          {/* Middle: Nav */}
          <NavItems />

          {/* Right: Auth/User */}
          <div className="hidden md:flex sm:gap-5 gap-3 justify-end items-center shrink-0">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
              >
                <img
                  src={userData?.avatar || "https://i.pravatar.cc/300"}
                  alt="User Avatar"
                  className="size-12 shrink-0 border border-gray-200 rounded-full object-cover"
                />
                <span className="text-lg font-medium text-gray-800">{userData?.name || "Guest"}</span>
              </Link>
            ) : (
              <>
                <Link href={"/auth/sign-up"}>Sign Up</Link>
                <Link
                  href={"/auth/sign-in"}
                  className="rounded-sm px-5 sm:py-2 py-1.5 font-semibold flex justify-center items-center border border-primary-dark hover:bg-primary-dark hover:text-white transition"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* mobile sidebar */}
      <MobileSideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
