"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CommonBtn from "../common/CommonBtn";
import CommonTitle from "../common/CommonTitle";
import right_image from "@/public/images/bannerImages/rightFlower.png";
import left_image from "@/public/images/bannerImages/leftFlower.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full xl:h-[750px] lg:h-[600px] md:h-[380px] h-[600px] overflow-hidden bg-white">
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
        className="absolute left-0 xl:bottom-0 w-[250px] lg:w-[400px] xl:w-[500px]"
      >
        <Image
          src={left_image}
          alt="Left Flower"
          aria-hidden="true"
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
        className="absolute right-0 bottom-0 w-[250px] lg:w-[370px] xl:w-[500px]" // lg:top-[100px] xl:bottom-0 xs:h-[380px] h-[300px]
      >
        <Image
          src={right_image}
          alt="Right Flower"
          aria-hidden="true"
          className="object-contain w-full h-auto"
          priority
        />
      </motion.div>

      {/* Hero Content with Animation */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        className="w-full relative px-4 z-10 max-w-xl mx-auto xl:pt-60 lg:pt-40 pt-28 flex flex-col lg:gap-6 gap-3 justify-center items-center"
      >
        <CommonTitle
          text="Your Personal Style Assistant"
          className="text-start font-secondary !font-semibold"
        />
        <p className="md:text-xl text-base font-primary text-primary-dark font-normal text-center lg:text-start">
          Discover your unique style, organize your wardrobe, and get
          personalized fashion advice with Chique Al.
        </p>
        {/* navigate to dashboard chat page */}
        <div className="w-full mt-2 flex gap-3 lg:justify-start md:items-start justify-center">
          <Link href="/dashboard">
            <CommonBtn className="rounded-lg text-nowrap w-fit !min-h-10 !p-2.5 !px-4">
              Try Chique Al
            </CommonBtn>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
