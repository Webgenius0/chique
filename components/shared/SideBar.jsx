"use client";
import { useRouter } from "next/navigation";
import { BsChatDots } from "react-icons/bs";
import { GrCoatCheck } from "react-icons/gr";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { PiSignOutBold } from "react-icons/pi";
import DashboardLogo from "../common/DashboardLogo";
import NavLink from "../common/NavLink";
import { useState } from "react";
import { Modal } from "antd";

const SideBar = ({ isOpen = false, onClose }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    {
      path: "/dashboard",
      name: "Chat",
      icon: <BsChatDots />,
      end: true,
    },
    {
      path: "/dashboard/my-clothes",
      name: "My Clothes",
      icon: <GrCoatCheck />,
    },
    {
      path: "/dashboard/explore",
      name: "Explore",
      icon: <FaGlobeAmericas />,
    },
    {
      path: "/dashboard/feedback",
      name: "Feedback",
      icon: <MdOutlineMessage />,
    },
  ];

  const handleLogout = () => {
    // TODO: clear auth if needed
    setIsModalOpen(false);
    router.push("/"); // Navigate to home
  };

  return (
    <aside
      className={`
        w-64 flex bg-[#FAFAFB] flex-col justify-start xl:static fixed overflow-y-auto shrink-0 transition-all duration-500 ease-in-out
        ${isOpen ? " xl:-ml-64 translate-x-0" : " xl:ml-0 -translate-x-full"}
        xl:translate-x-0 z-[500]
      `}
    >
      {/* LOGO */}
      <div className="w-full h-20 shrink-0 sticky top-0 flex justify-start items-center border-b overflow-hidden border-b-primary-dark">
        <DashboardLogo className="w-full h-full justify-center" />
        <button
          onClick={onClose}
          className="xl:hidden text-primary-dark -ml-10"
        >
          <RxCross2 className="text-3xl" />
        </button>
      </div>

      {/* NAV ITEMS */}
      <nav className="w-full pl-6 py-8 h-screen flex flex-col justify-start gap-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            href={item.path}
            end={item.end}
            className="w-full rounded-tl-lg text-xl rounded-bl-lg px-4 py-3 flex justify-start items-center gap-3 transition-colors duration-300"
            activeClassName="bg-primary-dark text-white"
            inactiveClassName="text-primary-dark hover:bg-primary-dark hover:text-white"
          >
            <span className="text-2xl shrink-0">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

        {/* Sign Out Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full text-left text-primary-dark hover:bg-primary-dark hover:text-white rounded-tl-lg text-xl rounded-bl-lg px-4 py-3 flex justify-start items-center gap-3 transition-colors duration-300"
        >
          <span className="text-2xl shrink-0">
            <PiSignOutBold className="text-[26px]" />
          </span>
          <span>Sign Out</span>
        </button>
      </nav>

      {/* Logout Confirmation Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        className="bg-white rounded-lg"
      >
        <div className="w-full flex flex-col gap-4 justify-start items-center py-6">
          <p className="text-center xs:text-4xl text-2xl text-primary-dark font-semibold">
            Sign Out
          </p>
          <p className="text-center text-primary-dark xs:text-xl text-lg font-semibold">
            Do you want to log out?
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="3xs:px-10 px-5 3xs:py-2 py-1.5 border hover:bg-primary-dark xs:text-lg text-base hover:text-white transition-all duration-300 ease-in-out border-primary text-black rounded-[100px] cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="3xs:px-10 px-5 3xs:py-2 py-1.5 border border-primary hover:bg-primary-dark xs:text-lg text-base hover:text-white text-black transition-all duration-300 ease-in-out rounded-[100px] cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      </Modal>
    </aside>
  );
};

export default SideBar;
