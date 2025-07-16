"use client"
import { pantData } from "@/data/db"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { use } from "react"; // Import the use hook

const CategoryItems = ({ category_slug }) => {
    const router = useRouter();
    return (
        <div className="w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 gap-5">
            {pantData.map((item) => (
                <div
                    onClick={() => router.push(`/dashboard/my-clothes/${category_slug}/${item.id}`)}
                    key={item.id}
                    className="w-full flex flex-col gap-3 cursor-pointer"
                >
                    <div className="w-full h-[360px] overflow-hidden rounded-2xl border p-4">
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            width={300} // Added recommended Image props
                            height={360}
                        />
                    </div>
                    <p className="text-base text-primary-dark font-primary font-medium bg-[#F8F8F8] p-2 rounded-lg">
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CategoryItems