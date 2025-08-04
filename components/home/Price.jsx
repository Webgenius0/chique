"use client";
import { useState } from "react";
import CommonTitle from "../common/CommonTitle";
import { motion } from "framer-motion";
import layer_image from "@/public/images/bannerImages/layer_image4.png";
import Image from "next/image";
import PriceCard from "./PriceCard";


const Price = () => {
  const [billingType, setBillingType] = useState("monthly");

  const handleToggle = (type) => {
    setBillingType(type);
  };

  const cardItems = [
    {
      id: 1,
      buttonText: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      subtitle: [
        "Upload up to 5 photos total",
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
      monthlyPrice: 4.99,
      yearlyPrice: 49.99,
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
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      subtitle: [
        "Upload up to 25 photos per day",
        "Make 25 outfit shopping searches per day",
        "Full access to My Closet",
        "Unlimited AI chat",
        "No ads",
        "Best for: Fashion lovers who want to organize their style and use the full AI experience daily",
      ],
    },
    {
      id: 4,
      buttonText: "Pro",
      monthlyPrice: 30,
      yearlyPrice: 299.99,
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

        {/* Title + Toggle */}
        <div className="w-full flex flex-col md:gap-4 gap-2 text-center items-center">
          <CommonTitle
            text="Subscription"
            className="font-secondary md:text-4xl sm:text-3xl xs:text-2xl text-xl"
          />
          <p className="text-lg text-primary-dark font-primary font-normal text-center">
            Pay by the month or the year, and cancel at any time.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="relative flex items-center w-[243px] h-[50px] bg-white/5 rounded-full border">
            {/* Slider */}
            <div
              className={`absolute w-1/2 h-full bg-[#0D0E10] rounded-full transition-all duration-300 ease-in-out ${billingType === "yearly"
                ? "translate-x-[120px]"
                : "translate-x-0"
                }`}
            ></div>

            {/* Monthly Button */}
            <button
              onClick={() => handleToggle("monthly")}
              className={`z-10 w-1/2 h-full rounded-full text-center font-medium transition-all duration-300 cursor-pointer ${billingType === "monthly" ? "text-white" : "text-black"
                }`}
            >
              Monthly
            </button>

            {/* Yearly Button */}
            <button
              onClick={() => handleToggle("yearly")}
              className={`z-10 w-1/2 h-full rounded-full text-center font-medium transition-all duration-300 cursor-pointer ${billingType === "yearly" ? "text-white" : "text-black"
                }`}
            >
              Yearly
            </button>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="w-full grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 sm:gap-6 gap-3">
          {cardItems.map((item, index) => (
            <PriceCard billingType={billingType} index={index} key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
