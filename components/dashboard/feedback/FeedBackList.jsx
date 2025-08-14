"use client"

import StarRating from "@/components/common/StarRating";

const FeedBackList = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            avatar: "https://i.pravatar.cc/300",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            rate: 4
        },
        {
            id: 2,
            name: "John Doe",
            avatar: "https://i.pravatar.cc/300",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            rate: 4
        },
        {
            id: 3,
            name: "John Doe",
            avatar: "https://i.pravatar.cc/300",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            rate: 4
        },
        {
            id: 4,
            name: "John Doe",
            avatar: "https://i.pravatar.cc/300",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            rate: 4
        },
        {
            id: 5,
            name: "John Doe",
            avatar: "https://i.pravatar.cc/300",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            rate: 4
        },

    ];
    // client side component
    return (
        <div className="w-full flex flex-col gap-6 justify-start items-start ">
            <h2 className="sm:text-3xl text-xl font-bold capitalize">Previous Review</h2>
            <div className="w-full flex flex-col gap-4 sm:gap-6">
                {data.map((item) => (
                    <div key={item.id} className="w-full flex sm:gap-5 gap-3 justify-start items-start">
                        <div className="sm:size-14 size-10 border rounded-full shrink-0 overflow-hidden">
                            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full flex flex-col gap-1 sm:gap-2">
                            <div className="flex items-center gap-2 sm:gap-3 justify-start">
                                <p className="sm:text-xl text-lg font-semibold">{item.name}</p>
                                <StarRating className="sm:text-lg text-base" rating={item.rate} />
                            </div>
                            <p className="text-base sm:text-lg">{item.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeedBackList