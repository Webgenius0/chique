import Link from "next/link"
import Logo from "../common/Logo"
import NavItems from "./NavItems"

const Header = () => {
    return (
        <header className="w-full py-3 text-base font-secondary capitalize border-b font-medium backdrop-blur-md border-[#2E2125] sticky top-0 bg-background z-[500]">
            <div className="container flex gap-6 justify-between items-center">
                <Logo />
                <NavItems />
                <div className="flex gap-5 justify-end items-center shrink-0">
                    <Link href={"/auth/sign-up"}>Sign Up</Link>
                    <Link href={"/auth/sign-in"} className="rounded-sm px-5 py-2 font-semibold flex justify-center items-center  border border-primary-dark font-">Log In</Link>
                </div>
            </div>
        </header>
    )
}

export default Header