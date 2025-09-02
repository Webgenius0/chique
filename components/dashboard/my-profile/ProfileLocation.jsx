"use client";
import CommonBtn from "@/components/common/CommonBtn";
import { useUser } from "@/hooks/get-user.hook";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import MapView (client only)
const MapView = dynamic(() => import("./MapView"), { ssr: false });

const ProfileLocation = () => {
    const axiosInstance = axiosPrivateClient();
    const { userData, userRefetch } = useUser();

    const { user } = userData || {};
    const { latitude, longitude } = user || {};

    const [location, setLocation] = useState({
        latitude: latitude || 23.8103,
        longitude: longitude || 90.4125,
    });

    const locationUpdate = useMutation({
        mutationKey: ["location-update"],
        mutationFn: async () => {
            const response = await axiosInstance.post("/update-profile", {
                latitude: String(location.latitude),
                longitude: String(location.longitude),
            });
            return response.data;
        },
        onSuccess: (response) => {
            toast.success(response?.message || "Location updated successfully");
            userRefetch();
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || "Something went wrong");
        },
    });

    return (
        <div className="w-full flex flex-col">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
                Location
            </h2>
            <div className="w-full grid grid-cols-2 gap-6 mt-6">
                <input
                    type="text"
                    placeholder="Latitude"
                    value={location.latitude}
                    readOnly
                    className="p-3 outline-none border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Longitude"
                    value={location.longitude}
                    readOnly
                    className="p-3 outline-none border border-gray-300 rounded"
                />
            </div>

            {/* Leaflet Map */}
            <div className="w-full h-[400px] mt-6 rounded overflow-hidden border">
                <MapView location={location} setLocation={setLocation} />
            </div>
            <button onClick={() => locationUpdate.mutate()} type="button" className=" bg-black text-xl text-white py-4 w-[220px] px-6 self-end mt-6 cursor-pointer">
                {locationUpdate.isPending ? "Updating..." : "Update Location"}
            </button>
        </div>
    );
};

export default ProfileLocation;
