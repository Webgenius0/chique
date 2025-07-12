import { wardrobeItems } from "@/data/db";
import Image from "next/image";
import { GoFileDirectory } from "react-icons/go";

const Wardrobe = () => {
  return (
    <div className="w-full min-w-[50%] flex flex-col gap-6">
      <p className="text-2xl text-primary-dark font-medium font-primary">
        Add New Item to Your Wardrobe
      </p>
      <div className="w-full grid grid-cols-3 gap-4">
        {wardrobeItems.map((item) => (
          <div
            className="w-full flex flex-col gap-3 cursor-pointer "
            key={item.id}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wardrobe;
