"use client";
import Image from "next/image";
import { MdOutlineWbSunny } from "react-icons/md";
import OutfitCard from "./OutfitCard";
import { useQuery } from "@tanstack/react-query";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { getOutfitSuggestion } from "@/lib/api/get-outfit-suggestion";
import WardrobeItemCardSkeleton from "./WardrobeCardSkeleton";
import { Result } from "antd";

const OutfitSuggestion = () => {
  // hooks
  const axiosInstance = axiosPrivateClient();
  // get outfit suggestions
  const {
    data,
    isError,
    isLoading,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ["OutfitSuggestion"],
    queryFn: () => getOutfitSuggestion(axiosInstance),
  })
  // main render
  return (
    <div className="w-full flex flex-col gap-6 justify-start">
      {/* Header Section */}
      <div className="w-full flex justify-between">
        <p className="xs:text-2xl text-xl text-primary-dark font-medium font-primary">
          Al Outfit Suggestions
        </p>
        <div className="w-fit flex items-center gap-3 text-primary-dark">
          <MdOutlineWbSunny className="text-primary-dark text-2xl" />
          <p className="text-primary-dark text-base font-medium">
            24°C
          </p>
        </div>
      </div>
      {/* Outfit Suggestions Section */}
      {
        isLoading || isFetching ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(4)].map((_, index) => (
              <WardrobeItemCardSkeleton key={index} />
            ))}
          </div>
        ) : isError ? (
          <div className="w-full h-[300px] flex justify-center items-center">
            <Result
              status={"error"}
              title={"Something went wrong!"}
              subTitle={"Please try again later."}
              extra={
                <CommonBtn
                  onclick={() => refetch()}
                  type="button"
                  isLoading={isLoading || isFetching}
                  className={"rounded-md"}
                >
                  Try Again
                </CommonBtn>
              }
            />
          </div>
        ) : data?.length === 0 ? (
          <div className="w-full h-64 flex justify-center items-center">
            <Empty description="No outfit suggestions found" />
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data?.map((item) => (
              <OutfitCard item={item} key={item.item_id} />
            ))}
          </div>
        )
      }
    </div >
  );
};

export default OutfitSuggestion;
