"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import google from "@/public/images/icons/google.png";
import apple from "@/public/images/icons/apple.png";

const SocialAuth = () => {
  const socialButtons = [
    {
      id: "google",
      icon: google,
      text: "Continue with Google",
      iconSize: { width: 24, height: 24 },
    },
    {
      id: "apple",
      icon: apple,
      text: "Continue with Apple",
      iconSize: { width: 22, height: 22 },
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4">
      {socialButtons.map((button) => (
        <motion.button
          key={button.id}
          className="w-full flex cursor-pointer border border-common-border rounded-[40px] bg-white py-3 px-4 sm:py-4 sm:px-5 text-primary-dark capitalize gap-3 sm:gap-5 justify-center items-center transition-all"
          whileHover={{
            backgroundColor: "#f8f8f8",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <Image
              src={button.icon}
              alt={button.id}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 20px, 24px"
            />
          </div>
          <span className="text-base">{button.text}</span>
        </motion.button>
      ))}
    </div>
  );
};
export default SocialAuth;
