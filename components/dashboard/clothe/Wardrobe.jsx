"use client";
import { wardrobeItems } from "@/data/db";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoFileDirectory } from "react-icons/go";

const Wardrobe = () => {

  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-2xl text-primary-dark font-medium font-primary">
        Add New Item to Your Wardrobe
      </p>
      <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {wardrobeItems.map((item) => (
          <Link
            className="w-full flex flex-col gap-3 cursor-pointer "
            key={item.id}
            href={`/dashboard/my-clothes/${item.category}`}
          >
            <div className="w-full h-[290px] overflow-hidden border border-primary-dark rounded-2xl cursor-pointer">
              <Image
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.name}
              />
            </div>
            <div className="w-full flex gap-4 bg-[#F8F8F8] p-4 rounded-lg">
              <div className="w-12 h-12 bg-[#EDEDED] rounded-lg p-3">
                <GoFileDirectory className="text-2xl" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base text-primary-dark font-primary">
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
