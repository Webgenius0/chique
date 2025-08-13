"use client";
import NavBar from "@/components/shared/NavBar";
import SideBar from "@/components/shared/SideBar";
import { useState } from "react";

const ClientDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen flex">
      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="w-full h-full flex flex-col justify-start overflow-y-auto">
        <NavBar setIsOpen={setIsOpen} />
        <main className="w-full relative h-[calc(100vh-80px)] px-5 py-3 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;
