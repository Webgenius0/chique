"use client";

import Loader from "@/components/common/Loader";
import { useUser } from "@/hooks/get-user.hook";
import { Result } from "antd";
import NameAndAvatar from "./NameAndAvatar";

const ProfileInfo = () => {
    const { userData, isLoading, userRefetch } = useUser();
    // Loading state
    if (isLoading) {
        return (
            <div className="w-full flex items-center justify-center py-10 text-gray-500">
                <Loader />
                <span className="ml-2">Loading profile information...</span>
            </div>
        );
    }
    // No user data state
    if (!userData) {
        return (
            <div className="w-full flex items-center justify-center py-10 text-gray-500">
                <Result
                    status="500"
                    title="Error getting profile information"
                    subTitle="No profile information available."
                />
            </div>
        );
    }
    // destructure user data
    const { style_profile } = userData || {};
    // main render
    return (
        <div className="w-full flex flex-col gap-8 text-black">
            {/* User Section */}
            <NameAndAvatar />
            {/* Style Section */}
            <div className="w-full flex flex-col">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
                    Style Profile
                </h2>
                <div className="space-y-5 text-sm sm:text-base">
                    <div>
                        <p className="font-medium">Type</p>
                        <p className="text-gray-700">{style_profile?.type}</p>
                    </div>
                    <div>
                        <p className="font-medium">Details</p>
                        <p className="text-gray-700 leading-relaxed">
                            {style_profile?.details}
                        </p>
                    </div>
                    <div>
                        <p className="font-medium">Keywords</p>
                        <p className="text-gray-700 italic">{style_profile?.keywords}</p>
                    </div>
                    <div>
                        <p className="font-medium">Score Breakdown</p>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
                            {Object.entries(style_profile?.score_breakdown || {}).map(
                                ([key, value]) => (
                                    <div
                                        key={key}
                                        className="flex justify-between border px-3 py-2 rounded text-gray-800 text-sm sm:text-base"
                                    >
                                        <span>{key}</span>
                                        <span>{value}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Quiz Answers */}
            <div className="w-full flex flex-col">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
                    Quiz Answers
                </h2>
                <div className="space-y-3 text-sm sm:text-base">
                    {style_profile?.quiz_set?.map((q, i) => (
                        <div
                            key={i}
                            className="border p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                        >
                            <p className="font-medium">{q.question}</p>
                            <p className="text-gray-700 mt-1">
                                <span className="font-semibold">Answer:</span> {q.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
