"use client"
import { useUser } from "@/hooks/get-user.hook"

const ProfileResultClient = () => {
    const { userData } = useUser()
    const style_profile = userData?.style_profile || {}
    // handle keywords
    const keywords = style_profile?.keywords
        ? style_profile.keywords.includes(",")
            ? style_profile.keywords.split(",").map((kw) => kw.trim())
            : style_profile.keywords
        : null

    return (
        <div className="border rounded-lg sm:p-4 py-2 px-3 font-primary flex flex-col justify-start items-start sm:gap-3 gap-2 border-gray-300 max-w-[550px] w-full ">
            <p className="text-primary-dark sm:text-xl text-base xs:text-lg font-bold font-secondary capitalize">
                {style_profile?.type || "Unknown"}
            </p>
            <p className="text-primary-dark text-sm sm:text-base ">
                {style_profile?.details || "Unknown"}
            </p>
            <div className="text-primary-dark text-base w-full flex flex-col gap-2">
                <p className="sm:text-xl text-base font-medium">Keywords:</p>
                {Array.isArray(keywords) ? (
                    <div className="flex flex-wrap w-full gap-2 ">
                        {keywords.map((word, idx) => (
                            <span className="rounded-3xl text-xs capitalize bg-[#F5F6F7] px-2 py-1" key={idx}># {word}</span>
                        ))}
                    </div>
                ) : (
                    <span>{keywords || "Unknown"}</span>
                )}
            </div>
        </div>
    )
}

export default ProfileResultClient
