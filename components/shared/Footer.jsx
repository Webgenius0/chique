import Logo from "../common/Logo"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-10">
            <div className="container flex flex-col gap-10 justify-start">
                <div className="w-full flex gap-6 justify-between items-center">
                    <div className="flex flex-col text-lg gap-4 justify-start items-start">
                        <Logo className="w-40 h-11" />
                        <p> © {currentYear} Chique AI. All rights reserved.</p>
                    </div>
                </div>
                <hr className="w-full border border-[#0D0E10]" />

            </div>
        </footer>
    )
}

export default Footer