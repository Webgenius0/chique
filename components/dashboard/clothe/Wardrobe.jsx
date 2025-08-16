"use client";
import { wardrobeItems } from "@/data/db";
import Link from "next/link";
import { RiDownloadCloudFill } from "react-icons/ri";
import WardrobeItemCard from "./WardrobeItemCard";

const Wardrobe = () => {

  // Wardrobe component to display items
  return (
    <div className="w-full flex flex-col xs:gap-6 gap-4">
      {/* Header Section */}
      <div className="w-full flex justify-between items-center">
        <p className="xs:text-2xl text-xl text-primary-dark font-medium font-primary">
          Add New Item to Your Wardrobe
        </p>
        <Link href="/dashboard/my-clothes/add-item" className=" flex justify-center self-end w-fit gap-2 items-center  px-5 rounded-lg border py-3 text-base text-primary-dark font-medium font-primary cursor-pointer">
          <RiDownloadCloudFill className="text-xl" />
          Add Item
        </Link>
      </div>
      {/* Wardrobe Items Section */}
      <div className="w-full grid grid-cols-4 gap-6">
        {wardrobeItems.map((item) => (
          <WardrobeItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wardrobe;
