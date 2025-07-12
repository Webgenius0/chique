import { pantData } from "@/data/db";
import Image from "next/image";

const AiFashion = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-8">
      <p className="text-2xl font-semibold font-primary text-primary-dark">
        Pants
      </p>
      <div className="w-full grid grid-cols-5 gap-5">
        {pantData.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-3">
            <div className="w-full h-[360px] overflow-hidden rounded-2xl border p-4">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-base text-primary-dark font-primary font-medium bg-[#F8F8F8] p-2 rounded-lg">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiFashion;
