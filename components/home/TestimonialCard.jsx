import { FaUser } from "react-icons/fa6"
import StarRating from "../common/StarRating"

const TestimonialCard = ({ item = {} }) => {
    const {
        id,
        user_name,
        user_avatar,
        rating,
        review_text
    } = item || {}
    // main render
    return (
        <div className='w-96 rounded-2xl bg-[#26262E] text-[#A4ABE7] hover:text-white transition-all duration-500 ease-in-out hover:bg-primary-dark flex flex-col items-center justify-between gap-4 mr-5 border h-72 p-6'>
            <StarRating className='text-[#FFD700] shrink-0' rating={rating} />
            <p className='text-base text-center line-clamp-3'>
                {review_text || "N/A"}
            </p>
            <div className='size-12 border flex items-center justify-center shrink-0 rounded-full overflow-hidden'>
                {
                    user_avatar ? (
                        <img src={user_avatar} alt={user_name} className='w-full h-full object-cover' />
                    ) : (
                        <FaUser className='text-xl' />
                    )
                }
            </div>
            <p className='text-lg font-medium'>{user_name || "N/A"}</p>
        </div>
    )
}

export default TestimonialCard