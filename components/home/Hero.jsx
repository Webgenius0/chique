"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CommonBtn from "../common/CommonBtn";
import CommonTitle from "../common/CommonTitle";
import right_image from "@/public/images/bannerImages/rightFlower.png";
import left_image from "@/public/images/bannerImages/leftFlower.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[750px] overflow-hidden bg-white">
      {/* Left Flower Image with Animation */}
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          rotateX: 90,
          transformOrigin: "bottom left",
        }}
        animate={{ x: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute left-0 bottom-0 w-[300px] md:w-[400px] lg:w-[500px]"
      >
        <Image
          src={left_image}
          alt="Left Flower"
          className="object-contain w-full h-auto"
          priority
        />
      </motion.div>

      {/* Right Flower Image with Animation */}
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
          rotateX: 90,
          transformOrigin: "bottom right",
        }}
        animate={{ x: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute right-0 bottom-0 w-[300px] md:w-[400px] lg:w-[500px]"
      >
        <Image
          src={right_image}
          alt="Right Flower"
          className="object-contain w-full h-auto"
          priority
        />
      </motion.div>

      {/* Hero Content with Animation */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 max-w-xl mx-auto pt-60 flex flex-col gap-6 justify-center items-center"
      >
        <CommonTitle
          text="Your Personal Style Assistant"
          className="text-start font-secondary !font-semibold !leading-[60px]"
        />
        <p className="text-xl font-primary text-primary-dark font-normal">
          Discover your unique style, organize your wardrobe, and get
          personalized fashion advice with Chique Al.
        </p>

        <div className="w-full mt-2 flex gap-3 justify-start items-start">
          <CommonBtn className="rounded-lg text-nowrap w-fit !min-h-10 !p-2.5 !px-4">
            Try Chique Al
          </CommonBtn>
          <CommonBtn className="rounded-lg bg-white text-primary-dark border text-nowrap w-fit !min-h-10 !p-2.5 !px-4">
            Learn More
          </CommonBtn>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
