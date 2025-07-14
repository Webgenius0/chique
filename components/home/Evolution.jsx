"use client";
import CommonBtn from "../common/CommonBtn";
import CommonSectionTitle from "../common/CommonSectionTitle";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image5.png";
import Image from "next/image";

const Evolution = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center xl:gap-8 lg:gap-7 md:gap-6 sm:gap-5 gap-3 xl:py-20 lg:py-14 md:py-7 xs:py-5">
        {/* left side layer Flower Image with Animation */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
            rotateX: 90,
            transformOrigin: "bottom left",
          }}
          animate={{ x: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute left-0 bottom-0 w-[300px] md:w-[400px] lg:w-[250px]"
        >
          <Image
            src={layer_image}
            alt="Right Flower"
            className="object-contain w-full h-auto"
            priority
          />
        </motion.div>
        <CommonSectionTitle
          text="Begin Your Style Evolution"
          className={"!font-bold !font-secondary"}
        />
        <p className="md:text-xl text-sm text-center font-medium font-primary text-primary-dark px-4">
          Discover your aesthetic. Streamline your wardrobe. Dress with clarity.
        </p>
        <CommonBtn
          link={true}
          path="/dashboard"
          className="rounded-lg text-nowrap w-fit !min-h-10 !p-2.5 !px-10"
        >
          Try Chique Al
        </CommonBtn>
      </div>
    </div>
  );
};
export default Evolution;