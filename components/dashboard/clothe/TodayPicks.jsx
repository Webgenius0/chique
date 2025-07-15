"use client";

import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsThermometerSun } from "react-icons/bs";
import { RiDownloadCloudFill } from "react-icons/ri";
import { marqueData } from "@/data/db";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const TodayPicks = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Weather Row */}
      <div className="w-full flex  justify-between">
        <div className="flex items-center gap-3 text-primary-dark">
          <MdOutlineWbSunny size={24} className="text-[#0984E2]" />
          <p className="text-primary-dark text-base font-medium">
            24°C
          </p>
        </div>
        <div className="flex items-center gap-3 text-primary-dark">
          <BsThermometerSun size={24} className="text-primary-dark" />
          <p className="text-primary-dark text-base font-medium">
            Partly Cloudy
          </p>
        </div>
      </div>
      {/* Marquee */}
      <div className="w-full flex flex-col gap-5">
        <p className="text-primary-dark text-2xl font-medium font-primary">
          Today’s Picks
        </p>
        {/* Marquee Section */}
        <Marquee pauseOnHover={true} gradient={false} speed={40}>
          {marqueData.map((item) => (
            <div
              key={item.id}
              className=" max-w-[240px] flex-shrink-0 mx-3 flex flex-col gap-2 bg-[#F8F8F8] rounded-lg p-3"
            >
              <div className="w-full h-[190px] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.title}
                  width={240}
                  height={190}
                />
              </div>
              <p className="text-base text-gray-400 font-normal font-primary">
                {item.title}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <p className="text-[28px] text-primary-dark font-primary font-bold text-center">
          Add an item to your closet
        </p>
        <Link href="/dashboard/my-clothes/add-item" className="w-fit flex gap-2 items-center px-20 rounded-lg border py-3 text-base text-primary-dark font-medium font-primary cursor-pointer">
          <RiDownloadCloudFill className="text-xl" />
          Upload from photos
        </Link>
      </div>
    </div>
  );
};

export default TodayPicks;
