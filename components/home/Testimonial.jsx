import React from 'react'
import CommonTitle from '../common/CommonTitle'
import Marquee from "react-fast-marquee";
import { testimonials } from '@/data/db';
import StarRating from '../common/StarRating';
const Testimonial = () => {

    // main render
    return (
        <div className='w-full flex flex-col md:gap-6 gap-2 text-center items-center py-10'>
            <CommonTitle
                text="What Our Clients Say About Us"
                className="font-secondary md:text-4xl sm:text-3xl xs:text-2xl text-xl"
            />
            <p className="text-lg max-w-3xl text-primary-dark font-primary font-normal text-center">
                Community development is often linked with community work or community planning, and may involve stakeholders, foundations.
            </p>
            <Marquee
                gradient
                gradientColor="#F9F9F9"
                gradientWidth={200}
                autoFill
                speed={40}
                pauseOnHover
                className='w-full min-h-96'>
                {testimonials?.map((item) => (
                    <div className='w-96 rounded-2xl bg-[#26262E] text-[#A4ABE7] hover:text-white transition-all duration-500 ease-in-out hover:bg-primary-dark flex flex-col items-center justify-between gap-4 mr-5 border h-72 p-6' key={item.id}>
                        <StarRating className='text-[#FFD700] shrink-0' rating={item.rating} />
                        <p className='text-base text-center line-clamp-3'>
                            {item.review}
                        </p>
                        <div className='size-12 shrink-0 rounded-full overflow-hidden'>
                            <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                        </div>
                        <p className='text-lg font-medium'>{item.name}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Testimonial