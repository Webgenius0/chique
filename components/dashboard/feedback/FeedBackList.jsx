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
            <h2 className="text-3xl font-bold capitalize">Previous Review</h2>
            <div className="w-full flex flex-col gap-6">
                {data.map((item) => (
                    <div className="w-full flex gap-5 justify-start items-start">
                        <div className="size-14 border rounded-full shrink-0 overflow-hidden">
                            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex items-center gap-3 justify-start">
                                <p className="text-xl font-semibold">{item.name}</p>
                                <StarRating className="text-lg" rating={item.rate} />
                            </div>
                            <p className="text-lg">{item.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeedBackList