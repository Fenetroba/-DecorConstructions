'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../public/image.jpg'
const Site = () => {
    return (
        <div className='relative w-full h-[60vh] md:h-[80vh] top-[100vh] group overflow-hidden'>
            <div className='absolute inset-0 mask-about w-full h-full shadow-2xl z-10 About'>
                <div className='relative w-full h-full overflow-hidden'>
                    <Image
                        src={img}
                        alt="Site background"
                        fill
                        className='object-cover transition-transform duration-1000 ease-out group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500'></div>
                </div>

                <div className='absolute inset-0 flex flex-col items-center justify-center p-6 top-[50%] text-center'>
                    <h1 className='text-3xl md:text-3xl lg:text-3xl font-black text-white tracking-tighter uppercase transition-transform duration-500 group-hover:-translate-y-2'>
                        WE FOCUSED ON
                    </h1>
                    <div className='w-20 h-1 bg-primary mt-4 mb-6 transition-all duration-500 group-hover:w-32'></div>
                    <p className='text-sm font-light md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed transition-all duration-500 group-hover:text-white'>
                    voluptatibus nostrum sit mollitia dignissimos iure consequatur fuga exercitationem incidunt earum animi nemo! Laborum, mollitia iste?
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Site