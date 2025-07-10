"use client";

import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import CommonTitle from "../common/CommonTitle";
import CommonBtn from "../common/CommonBtn";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image4.png";
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

const Price = () => {
  const cardItems = [
    {
      id: 1,
      icon: <FaCircleCheck />,
      buttonText: "Free",
      price: 0,
      subtitle: ["Basic AI Style", "5 Virtual Outfits", "Community Support"],
    },
    {
      id: 2,
      icon: <FaCircleCheck />,
      buttonText: "Regular",
      price: 9.99,
      subtitle: [
        "Advanced AI Styling",
        "20 Virtual Outfits",
        "Piority Support",
      ],
    },
    {
      id: 3,
      icon: <FaCircleCheck />,
      buttonText: "Plus",
      price: 19.99,
      subtitle: [
        "Premium AI Stying",
        "Unimited Virtual Outfits",
        "24/7 Suppoted",
      ],
    },
    {
      id: 4,
      icon: <FaCircleCheck />,
      buttonText: "Pro",
      price: 49.99,
      subtitle: ["Premium AI Stying", "Team Features", "Dedicated Styles"],
    },
  ];
  return (
    <div className="w-full relative">
      <div className="container flex flex-col gap-10 py-20">
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
          className="absolute right-0 bottom-20 w-[300px] md:w-[400px] lg:w-[230px]"
        >
          <Image
            src={layer_image}
            alt="Right Flower"
            className="object-contain w-full h-auto"
            priority
          />
        </motion.div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-2 justify-center items-center">
            <FaStar />
            <p className="text-lg text-primary-dark font-primary font-semibold">
              Pricing
            </p>
          </div>
          <CommonTitle
            text="Plans & Pricing"
            className={"font-secondary text-primary-dark font-semibold"}
          />
          <p className="text-lg text-primary-dark font-primary font-normal text-center">
            Pay by the month or the year, and cancel at any time.
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-6">
          {cardItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-full flex flex-col gap-8 border rounded-[20px] py-6 px-5 hover:bg-[#B1B0B0] transition duration-500"
              variants={flipVariants}
              initial="hidden"
              whileInView="visible"
              custom={index} // this is passed to variants for delay
              viewport={{ once: true, amount: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <CommonBtn className="rounded-[100px] text-nowrap w-fit !min-h-10 !p-2.5 !px-10">
                {item.buttonText}
              </CommonBtn>
              <p className="text-2xl font-semibold text-primary-dark font-primary border-b pb-8">
                ${item.price} <span className="text-sm">/ Month</span>
              </p>
              <ul className=" space-y-4">
                {item?.subtitle?.map((subtitle, index) => (
                  <li key={index} className=" flex gap-2 items-center text-sm">
                    <FaCircleCheck />
                    <span className="text-sm font-primary">{subtitle}</span>
                  </li>
                ))}
              </ul>
              <CommonBtn className="rounded-[100px] text-nowrap !min-h-10 !p-2.5 !px-10">
                Get Started
              </CommonBtn>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
