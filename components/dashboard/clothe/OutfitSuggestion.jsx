"use client";

import { outfitData } from "@/data/db";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";

const OutfitSuggestion = () => {

  return (
    <div className="w-full flex flex-col gap-6 justify-start">
      <div className="w-full flex justify-between">
        <p className="text-2xl text-primary-dark font-medium font-primary">
          Al Outfit Suggestions
        </p>
        <div className="w-fit flex items-center gap-3 text-primary-dark">
          <MdOutlineWbSunny className="text-primary-dark text-2xl" />
          <p className="text-primary-dark text-base font-medium">
            24°C
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-5">
        {outfitData.map((item) => (
          <div key={item.id} className="w-full  bg-[#FAFAFB] rounded-lg p-4">
            <div className="w-full h-[220px] overflow-hidden">
              <Image
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.title}
              />
            </div>
            <div className="w-full flex flex-col gap-1 bg-[#F5F6F7] py-3">
              <p className="text-xl text-primary-dark font-primary">
                {item.title}
              </p>
              <p className="text-base text-[#2B2B2B] font-primary">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutfitSuggestion;
