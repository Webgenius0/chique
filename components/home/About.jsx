"use client";

import CommonSectionTitle from "../common/CommonSectionTitle";
import { FaRegCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image3.png";
import Image from "next/image";

const About = () => {
  const items = [
    {
      id: 1,
      icon: <FaRegCircleCheck />,
      title: "You care about how you dress",
      subtitle:
        "Your appearance matters to you, and you want to present yourself in the best possible way.",
    },
    {
      id: 2,
      icon: <FaRegCircleCheck />,
      title: "You want to look chic without wasting time",
      subtitle:
        "You value efficiency and want to streamline your styling process while maintaining elegance.",
    },
    {
      id: 3,
      icon: <FaRegCircleCheck />,
      title: "You struggle with styling",
      subtitle:
        "Creating cohesive outfits can be challenging, and you're looking for expert guidance.",
    },
    {
      id: 4,
      icon: <FaRegCircleCheck />,
      title: "You're ready for a glow-up that feels effortless",
      subtitle:
        "You want to elevate your style without it feeling like a complicated or overwhelming process.",
    },
  ];
  return (
    <div id="about" className="w-full relative">
      <div className="container flex flex-col xl:gap-14 lg:gap-8 gap-5 xl:py-20 md:pt-10 pt-5 xl:px-28">
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
          className="absolute right-0 bottom-32 w-[300px] md:w-[400px] lg:w-[300px]"
        >
          <Image
            src={layer_image}
            alt="Right Flower"
            className="object-contain w-full h-auto"
            priority
          />
        </motion.div>
        <CommonSectionTitle
          text="Who It's For"
          className={"!font-bold !font-secondary"}
        />
        {/* about cards */}
        <div className="w-full grid sm:grid-cols-2 xl:gap-20 lg:gap-10 gap-5">
          {items.map((item) => (
            <div key={item.id} className="w-full flex md:gap-4 gap-2 justify-center">
              <div className="md:text-2xl text-lg">{item.icon}</div>
              <div className="w-full flex flex-col md:gap-3 gap-1.5 -mt-1">
                <p className="xl:text-3xl lg:text-xl text-lg md:font-bold font-semibold font-secondary text-primary-dark">
                  {item.title}
                </p>
                <p className="md:text-base text-sm font-light font-primary text-primary-dark">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;