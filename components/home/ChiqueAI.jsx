"use client";

import CommonSectionTitle from "../common/CommonSectionTitle";
import { LuPalette } from "react-icons/lu";
import { PiTShirtLight } from "react-icons/pi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuMessageCircleMore } from "react-icons/lu";
import { motion } from "framer-motion";

const flipVariants = {
  hidden: { rotateY: 180, opacity: 0 },
  visible: (index) => ({
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.2, // staggered delay
      ease: "easeOut",
    },
  }),
};

const ChiqueAI = () => {
  const cardItems = [
    {
      id: 1,
      icon: <PiTShirtLight />,
      title: "Style What You Own",
      subTitle:
        "Style complete outfits using your existing wardrobe, maximizing what you already have.",
    },
    {
      id: 2,
      icon: <LuPalette />,
      title: "Define Your Style",
      subTitle:
        "Discover and refine your unique aesthetic through personalized recommendations.",
    },
    {
      id: 3,
      icon: <LiaShoppingBagSolid />,
      title: "Shop Smarter",
      subTitle:
        "Find similar pieces to any look, instantly compare options and make better choices.",
    },
    {
      id: 4,
      icon: <LuMessageCircleMore />,
      title: "Ask Anything",
      subTitle:
        "Get real-time fashion advice through intelligent chat that understands your preferences.",
    },
  ];

  return (
    <div className="container flex flex-col gap-14">
      <CommonSectionTitle
        text="What Chique AI Does"
        className={"!font-bold !font-secondary"}
      />
      <div className="w-full grid grid-cols-4 gap-5">
        {cardItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="w-full flex flex-col gap-4 bg-[#F8F8F8] p-6 rounded-lg hover:bg-primary-dark/20 transition-all duration-500"
            variants={flipVariants}
            initial="hidden"
            whileInView="visible"
            custom={index} // this is passed to variants for delay
            viewport={{ once: true, amount: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-[#F4F4F4] w-[60px] h-[60px] rounded-full text-3xl p-4 cursor-pointer">
              {item.icon}
            </div>
            <p className="text-lg font-bold font-secondary text-primary-dark">
              {item.title}
            </p>
            <p className="text-sm font-light font-primary text-primary-dark">
              {item.subTitle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChiqueAI;
