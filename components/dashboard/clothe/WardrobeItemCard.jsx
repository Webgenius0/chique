"use client"
import Image from "next/image"
import Link from "next/link"
import { GoFileDirectory } from "react-icons/go";
const WardrobeItemCard = ({ item = {} }) => {
    return (
        <Link className="w-full flex flex-col gap-3 cursor-pointer" href={`/dashboard/my-clothes/${item.category}`}>
            <div className="w-full sm:h-[290px] h-[200px] overflow-hidden border border-primary-dark rounded-lg cursor-pointer p-2">
                <Image
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.name}
                    width={500}
                    height={500}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    )
}

export default WardrobeItemCard