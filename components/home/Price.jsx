"use client";
import { FaStar } from "react-icons/fa";
import CommonTitle from "../common/CommonTitle";
import CommonBtn from "../common/CommonBtn";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image4.png";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

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

const Price = () => {
  const cardItems = [
    {
      id: 1,
      buttonText: "Free",
      price: 0,
      subtitle: [
        "Upload up to 5 phots total",
        "Make 3 outfit shopping searches",
        "No MY Closet access",
        "Limited AI usage",
        "Ads included",
        "Best for: Trying the platform with no commitment",
      ],
    },
    {
      id: 2,
      buttonText: "Regular",
      price: 4.99,
      subtitle: [
        "Upload up to 15 photos per day",
        "Make 15 outfit shopping searches per day",
        "Unlimited AI chat",
        "No My Closet access",
        "No ads",
        "Best for: Casual users who want more features and a clean, ad-free experience",
      ],
    },
    {
      id: 3,
      buttonText: "Plus",
      price: 14.99,
      subtitle: [
        "Upload up to 25 photos per day",
        "Make 25 outfit shopping searches per day",
        "Full accress to My Closet",
        "Unlimited AI chat",
        "No ads",
        "Best for: Fashion lovers who want to organize their style and use the full AI experience daily",
      ],
    },
    {
      id: 4,
      buttonText: "Pro",
      price: 30,
      subtitle: [
        "Unlimited photo uploads",
        "Unlimited outfit shopping searches",
        "Full access to My Closet",
        "Unlimited AI chat",
        "No ads",
        "Premium experience with everything unlocked",
        "Best for: Stylists, influencers, or serious users who want total freedom",
      ],
    },
  ];

  return (
    <div id="subscriptions" className="w-full relative">
      <div className="container flex flex-col xs:gap-10 gap-5 xl:py-20">
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
        <div className="w-full flex flex-col md:gap-4 gap-2 text-center items-center">
          <div className="flex gap-2 justify-center items-center">
            <FaStar />
            <p className="text-lg text-primary-dark font-primary font-semibold">
              Pricing
            </p>
          </div>
          <CommonTitle
            text="Subscription"
            className={
              "font-secondary md:text-4xl sm:text-3xl xs:text-2xl text-xl"
            }
          />
          <p className="text-lg text-primary-dark font-primary font-normal text-center">
            Pay by the month or the year, and cancel at any time.
          </p>
        </div>
        {/* cards */}
        <div className="w-full grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 sm:gap-6 gap-3">
          {cardItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-full flex flex-col sm:gap-8 gap-5 border rounded-[20px] py-6 px-5 hover:bg-[#B1B0B0] transition duration-500"
              variants={flipVariants}
              initial="hidden"
              whileInView="visible"
              custom={index} // this is passed to variants for delay
              viewport={{ once: true, amount: 0 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <CommonBtn className="rounded-[100px] font-primary text-nowrap w-fit !min-h-10 !p-2.5 !px-10">
                {item.buttonText}
              </CommonBtn>
              <p className="text-2xl font-semibold text-primary-dark font-primary border-b sm:pb-8 pb-5">
                ${item.price} <span className="text-sm">/ Month</span>
              </p>
              <ul className="space-y-4">
                {item?.subtitle?.map((subtitle, index) => (
                  <li key={index} className=" flex gap-2 items-center text-sm">
                    <div className="min-w-6 h-6 rounded-full bg-primary-dark p-0.5">
                      <TiTick className="text-white text-xl" />
                    </div>
                    <span className="text-sm font-primary">{subtitle}</span>
                  </li>
                ))}
              </ul>
              <CommonBtn className="rounded-[100px] font-primary text-nowrap !min-h-10 !p-2.5 !px-10">
                Get Started
              </CommonBtn>
            </motion.div>
          ))}
        </div>
        {/* Tip for Extra Profit Section */}
        <div className="w-fit sm:p-5 p-3 mx-auto sm:mt-10 mt-5 flex flex-col sm:gap-5 gap-3 items-center text-center border border-primary-dark rounded-2xl hover:bg-[#B1B0B0] transition duration-500">
          <p className="xl:text-4xl sm:text-3xl text-2xl font-semibold font-secondary text-primary-dark">
            Tip for Extra Profit
          </p>
          <p className="sm:text-2xl xs:text-xl text-lg text-gray-600 max-w-xl font-primary">
            Offer yearly plans with 2 months free:
          </p>
          <div className="flex flex-col items-start gap-3 font-primary">
            <p className="sm:text-2xl text-xl">
              Regular:{" "}
              <span className="sm:text-3xl xs:text-2xl text-xl font-semibold">
                $ 49.99
              </span>
              /year
            </p>
            <p className="sm:text-2xl text-xl">
              Pro:{" "}
              <span className="sm:text-3xl xs:text-2xl text-xl font-semibold">
                $ 149.99
              </span>
              /year
            </p>
            <p className="sm:text-2xl text-xl">
              Plus:{" "}
              <span className="sm:text-3xl xs:text-2xl text-xl font-semibold">
                $ 299.99
              </span>
              /year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Price;
