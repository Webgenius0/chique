"use client"
import { pantData } from "@/data/db"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { use } from "react"; // Import the use hook

const CategoryItems = ({ category_slug }) => {
    const router = useRouter();
    return (
        <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-5 gap-3">
            {pantData.map((item) => (
                <div
                    onClick={() => router.push(`/dashboard/my-clothes/${category_slug}/${item.id}`)}
                    key={item.id}
                    className="w-full flex flex-col gap-3 cursor-pointer"
                >
                    <div className="w-full xs:h-[360px] 3xs:h-[300px] h-[250px] overflow-hidden rounded-2xl border 3xs:p-4 p-1.5">
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            width={300} // Added recommended Image props
                            height={360}
                        />
                    </div>
                    <p className="2xs:text-base text-sm text-primary-dark font-primary font-medium bg-[#F8F8F8] p-2 rounded-lg">
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CategoryItems