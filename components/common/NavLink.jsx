"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
    href,
    children,
    className = "",
    activeClassName = "",
    inactiveClassName = "",
    end = false,
    exact = false,
    ...props
}) => {
    const pathname = usePathname();
    const finalEnd = end || exact;

    // Determine if the link is active
    const isActive = finalEnd
        ? pathname === href
        : pathname.startsWith(href) &&
        (pathname === href || pathname.charAt(href.length) === "/");

    // Combine classes based on active state
    const combinedClassName = `${className} ${isActive ? activeClassName : inactiveClassName
        }`.trim();

    return (
        <Link href={href} className={combinedClassName} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;