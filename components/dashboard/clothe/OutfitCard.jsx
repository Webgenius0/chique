"use client"
import Image from "next/image"
const OutfitCard = ({ item = {} }) => {
    return (
        <div className="w-full  bg-[#FAFAFB] rounded-lg p-4">
            <div className="w-full h-[220px] overflow-hidden">
                <Image
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                />
            </div>
            <div className="w-full flex flex-col gap-1 bg-[#F5F6F7] py-3">
                <p className="xs:text-xl text-lg text-primary-dark font-primary">
                    {item.title}
                </p>
                <p className="text-base text-[#2B2B2B] font-primary">
                    {item.subtitle}
                </p>
            </div>
        </div>
    )
}

export default OutfitCard