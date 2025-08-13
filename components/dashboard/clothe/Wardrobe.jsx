"use client";
import { wardrobeItems } from "@/data/db";
import Image from "next/image";
import Link from "next/link";
import { GoFileDirectory } from "react-icons/go";

const Wardrobe = () => {

  return (
    <div className="w-full flex flex-col xs:gap-6 gap-4">
      <p className="xs:text-2xl text-xl text-primary-dark font-medium font-primary">
        Add New Item to Your Wardrobe
      </p>
      <div className="w-full grid 3xl:grid-cols-3 grid-cols-2  gap-4">
        {wardrobeItems.map((item) => (
          <Link
            className="w-full flex flex-col gap-3 cursor-pointer "
            key={item.id}
            href={`/dashboard/my-clothes/${item.category}`}
          >
            <div className="w-full sm:h-[290px] h-[200px] overflow-hidden border border-primary-dark rounded-2xl cursor-pointer p-1.5">
              <Image
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.name}
              />
            </div>
            <div className="w-full flex sm:flex-row flex-col sm:gap-4 gap-2 bg-[#F8F8F8] sm:p-4 p-2 rounded-lg">
              <div className="sm:w-12 w-8 sm:h-12 h-8 bg-[#EDEDED] rounded-lg sm:p-3 p-1.5">
                <GoFileDirectory className="sm:text-2xl text-xl" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="3xs:text-base text-sm text-primary-dark font-primary">
                  {item.name}
                </p>
                <p className="text-sm text-primary-dark font-primary">
                  {item.number} Items
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wardrobe;
