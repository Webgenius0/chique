import Image from 'next/image'
import React from 'react'

const SocialAuth = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <button className='w-full flex cursor-pointer border border-common-border rounded-[40px] bg-white py-4 px-5 text-primary-dark capitalize  gap-5 justify-center items-center'>
                <Image
                    src={"/images/icons/google.png"}
                    alt="Logo"
                    width={24}
                    height={24}
                    priority
                    style={{
                        width: 'auto', // if you modified height
                        height: 'auto' // if you modified width
                    }}
                    className="object-contain"
                />
                <span>Continue with Google</span>
            </button>
            <button className='w-full flex cursor-pointer border border-common-border rounded-[40px] bg-white py-4 px-5 text-primary-dark capitalize  gap-5 justify-center items-center'>
                <Image
                    src={"/images/icons/apple.png"}
                    alt="Logo"
                    width={22}
                    height={22}
                    priority
                    style={{
                        width: 'auto', // if you modified height
                        height: 'auto' // if you modified width
                    }}
                    className="object-contain"
                />
                <span>Continue with Apple</span>
            </button>
        </div>
    )
}

export default SocialAuth