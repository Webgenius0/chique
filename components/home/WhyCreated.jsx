"use client";

import CommonSectionTitle from "../common/CommonSectionTitle";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image2.png";
import Image from "next/image";

const WhyCreated = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 py-5 xl:py-20">
        {/* Left side layer Flower Image with Animation - Responsive */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
            rotateX: 90,
            transformOrigin: "bottom left",
          }}
          animate={{ x: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute left-0 -bottom-8 w-[150px] xs:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
        >
          <Image
            src={layer_image}
            alt="Decorative floral element"
            className="object-contain w-full h-auto"
            priority
          />
        </motion.div>

        {/* Title - Responsive */}
        <div className="relative z-10">
          <CommonSectionTitle
            text="Why It was Created"
            className="!font-bold !font-secondary"
          />
        </div>

        {/* Description - Responsive */}
        <p className="text-sm xs:text-base sm:text-lg text-center font-light font-primary text-primary-dark px-2 sm:px-4 md:px-8 lg:px-12">
          Despite full wardrobes and endless options, many still ask the same
          question: "What should I wear?" Chique AI was built to bring styling,
          clarity, and smart shopping into one elegant experience.
        </p>
      </div>
    </div>
  );
};

export default WhyCreated;