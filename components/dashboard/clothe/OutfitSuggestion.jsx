"use client";
import { outfitData } from "@/data/db";
import Image from "next/image";
import { MdOutlineWbSunny } from "react-icons/md";
import OutfitCard from "./OutfitCard";

const OutfitSuggestion = () => {

  return (
    <div className="w-full flex flex-col gap-6 justify-start">
      {/* Header Section */}
      <div className="w-full flex justify-between">
        <p className="xs:text-2xl text-xl text-primary-dark font-medium font-primary">
          Al Outfit Suggestions
        </p>
        <div className="w-fit flex items-center gap-3 text-primary-dark">
          <MdOutlineWbSunny className="text-primary-dark text-2xl" />
          <p className="text-primary-dark text-base font-medium">
            24°C
          </p>
        </div>
      </div>
      {/* Outfit Suggestions Section */}
      <div className="w-full grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-6">
        {outfitData.map((item) => (
          <OutfitCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default OutfitSuggestion;
