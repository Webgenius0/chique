"use client";
import CommonSectionTitle from "../common/CommonSectionTitle";
import { LuPalette } from "react-icons/lu";
import { PiTShirtLight } from "react-icons/pi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuMessageCircleMore } from "react-icons/lu";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image1.png";
import Image from "next/image";

const flipVariants = {
  hidden: { rotateY: 180, opacity: 0 },
  visible: (index) => ({
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
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
    <div className="w-full relative overflow-hidden">
      <div className="w-full container flex flex-col xl:gap-14 lg:gap-10 md:gap-7 gap-5 xl:pb-20 lg:pb-16 md:pb-4">
        {/* Right side layer Flower Image with Animation */}
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
            rotateX: 90,
            transformOrigin: "bottom right",
          }}
          animate={{ x: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute right-0 -bottom-5 w-[300px] md:w-[400px] lg:w-[300px] "
        >
          <Image
            src={layer_image}
            alt="Right Flower"
            className="object-contain w-full h-auto"
            priority
          />
        </motion.div>
        {/* title */}
        <CommonSectionTitle
          text="What Chique AI Does"
          className={"!font-bold !font-secondary"}
        />
        {/* chique ai cards */}
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
          {cardItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-full flex flex-col md:gap-4 gap-1 bg-[#F8F8F8] xl:p-6 p-4 rounded-lg hover:bg-primary-dark/20 transition-all duration-500"
              variants={flipVariants}
              initial="hidden"
              whileInView="visible"
              custom={index} // this is passed to variants for delay
              viewport={{ once: true, amount: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-[#F4F4F4] lg:w-[60px] w-10 lg:h-[60px] h-10 rounded-full lg:text-2xl text-xl flex items-center justify-center cursor-pointer">
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
    </div>
  );
};
export default ChiqueAI;