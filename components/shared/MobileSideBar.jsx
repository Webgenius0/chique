"use client"
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Logo from "../common/Logo";
import Link from "next/link";

const MobileSideBar = ({ toggleSidebar, isOpen }) => {
    const sidebarVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: "-100%", opacity: 0 },
    };

    const overlayVariants = {
        open: { opacity: 1, pointerEvents: "auto" },
        closed: { opacity: 0, pointerEvents: "none" },
    };
    return (
        <>
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
                            <div className="flex flex-col space-y-4 px-2">
                                <Link href="/" onClick={toggleSidebar}>
                                    Home
                                </Link>
                                <Link href="/#about" onClick={toggleSidebar}>
                                    About
                                </Link>
                                <Link href="/#subscriptions" onClick={toggleSidebar}>
                                    Subscriptions
                                </Link>
                                <Link href="/contact" onClick={toggleSidebar}>
                                    Contact
                                </Link>
                                <div className="md:hidden flex flex-col sm:gap-5 gap-3 justify-end items-start shrink-0">
                                    <Link href={"/auth/sign-up"}>Sign Up</Link>
                                    <Link href={"/auth/sign-in"}>Log In</Link>
                                </div>
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
    )
}

export default MobileSideBar