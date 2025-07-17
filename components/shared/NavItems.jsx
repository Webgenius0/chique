"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Subscription", path: "/#subscriptions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="md:flex hidden justify-between items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`relative py-1 !font-secondary `}
        >
          {item.name}
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-primary-dark transition-all duration-300 ${pathname === item.path ? "w-full" : "w-0"
              }`}
          />
        </Link>
      ))}
    </nav>
  );
};
export default NavItems;