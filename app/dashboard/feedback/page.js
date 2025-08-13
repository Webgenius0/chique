import FeedBackForm from "@/components/dashboard/feedback/FeedBackForm"
import FeedBackList from "@/components/dashboard/feedback/FeedBackList"

export const metadata = {
    title: 'Chique | Feed Back',
    description: 'Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.',
}

const FeedBack = () => {
    return (
        <div className="w-full flex flex-col xs:gap-6 gap-4 xs:py-10 py-5">
            {/* feed back form */}
            <FeedBackForm />
            {/* Previous feedback */}
            <FeedBackList />
        </div>
    )
}

export default FeedBack