"use client"
import CustomPagination from "@/components/common/CustomPagination";
import StarRating from "@/components/common/StarRating";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const FeedBackList = ({ reviewsDataServer = {} }) => {
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
    // axios
    const axiosInstance = axiosPrivateClient();
    // track current page
    const [currentPage, setCurrentPage] = useState(1);
    // pagination
    const [paginate, setPaginate] = useState({
        last_page: reviewsDataServer?.paginate?.last_page || 1,
        total: reviewsDataServer?.paginate?.total || 0,
        current_page: reviewsDataServer?.paginate?.current_page || 1,
        per_page: reviewsDataServer?.paginate?.per_page || 10
    });
    // get reviews
    const {
        data: reviews = [],
        isError,
        isLoading
    } = useQuery({
        queryKey: ["reviews", currentPage],
        queryFn: async () => {
            const response = await axiosInstance.get("/reviews", {
                params: {
                    page: currentPage
                }
            });
            setPaginate(response?.data?.data?.paginate)
            return response.data?.data?.reviews || [];
        },
        initialData: reviewsDataServer?.reviews || [],
    })
    console.log("Client reviews:", reviews);
    // page click
    const handlePageClick = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // client side component
    return (
        <div className="w-full flex flex-col gap-6 justify-start items-start ">
            {/* title */}
            <h2 className="sm:text-3xl text-xl font-bold capitalize">Previous Review</h2>
            {/* feedbacks */}
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
            {/* pagination */}
            {
                paginate?.last_page > 1 && !isError && (
                    <CustomPagination
                        handlePageClick={handlePageClick}
                        currentPage={currentPage}
                        perPage={paginate?.per_page}
                        totalItem={(paginate?.per_page * paginate?.last_page) || 0}
                    />
                )
            }
        </div>
    )
}

export default FeedBackList