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
      <div className="container flex flex-col gap-14 py-20 pt-10 px-28">
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
        <div className="w-full grid grid-cols-2 gap-20">
          {items.map((item) => (
            <div key={item.id} className="w-full flex gap-4 justify-center">
              <div className="text-2xl">{item.icon}</div>
              <div className="w-full flex flex-col gap-3 -mt-1">
                <p className="text-3xl font-bold font-secondary text-primary-dark">
                  {item.title}
                </p>
                <p className="text-base font-light font-primary text-primary-dark">
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
