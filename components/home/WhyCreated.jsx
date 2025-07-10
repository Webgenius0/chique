"use client";

import CommonSectionTitle from "../common/CommonSectionTitle";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image2.png";
import Image from "next/image";

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

const WhyCreated = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 py-20">
      {/* Right side layer Flower Image with Animation */}
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          rotateX: 90,
          transformOrigin: "bottom right",
        }}
        animate={{ x: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute left-0 -bottom-136 w-[300px] md:w-[400px] lg:w-[300px]"
      >
        <Image
          src={layer_image}
          alt="Right Flower"
          className="object-contain w-full h-auto"
          priority
        />
      </motion.div>
      <CommonSectionTitle
        text="Why It was Created"
        className={"!font-bold !font-secondary"}
      />
      <p className="text-base text-center font-light font-primary text-primary-dark">
        Despite full wardrobes and endless options, many still ask the same
        question: "What should I wear?" Chique AI was built to bring styling,
        clarity, and smart shopping into one elegant experience.
      </p>
    </div>
  );
};

export default WhyCreated;
