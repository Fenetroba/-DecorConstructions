'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../public/image.jpg'
const Site = () => {
    return (
        <div className='relative w-full h-[80vh] top-[100vh]'>
            <div className='absolute inset-0 mask-about w-full h-full sadow-xl About'>
                <Image src={img} alt="Site background" fill className='object-cover ' />
                
            </div>
        </div>
    )
}
export default Site