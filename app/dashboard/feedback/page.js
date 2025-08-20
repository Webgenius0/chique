import FeedBackForm from "@/components/dashboard/feedback/FeedBackForm"
import FeedBackList from "@/components/dashboard/feedback/FeedBackList"
import { getReviews } from "@/lib/api/get-reviews";
import { axiosPrivateServer } from "@/lib/axios.private.server";
import { cookies } from "next/headers";

export const metadata = {
    title: 'Chique | Feed Back',
    description: 'Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.',
}

const FeedBack = async () => {
    // get user data
    const cookieStore = await cookies();
    const token = cookieStore.get(process.env.AUTH_TOKEN_NAME)?.value || null;
    const axiosInstance = await axiosPrivateServer();
    let reviewsData = [];
    if (token) {
        try {
            reviewsData = await getReviews(axiosInstance);
        } catch (err) {
            console.error("Failed to fetch reviews on server:", err);
        }
    }
    console.log("Server reviews:", reviewsData);
    // main render
    return (
        <div className="w-full flex flex-col xs:gap-6 gap-4  py-5">
            {/* feed back form */}
            <FeedBackForm />
            {/* Previous feedback */}
            <FeedBackList reviewsDataServer={reviewsData} />
        </div>
    )
}

export default FeedBack