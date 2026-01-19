import Image from 'next/image'
import React from 'react'
import img from '../../public/image.jpg'

const Experience = () => {
  return (
    <div className='relative bg-black top-[100vh] w-full min-h-[50vh] flex flex-col items-center justify-center group overflow-hidden'>
      {/* Header / Background Shape */}
      <div className='About rotate-180 w-full  flex items-center justify-end mt-10'>
        <p className='rotate-180 border-2 border-white/30 p-4 rounded-full font-bold mx-10 text-white flex items-center justify-center w-48 h-48 backdrop-blur-sm hover:border-primary hover:text-primary transition-all duration-500'>
          50+ Years <br /> Experience
        </p>
      </div>

      {/* Content Overlay */}
      <div className='absolute  inset-0 flex flex-col items-center justify-center z-20 pointer-events-none'>
        <div className='max-w-4xl px-6 text-center space-y-4 transition-all duration-700 group-hover:-translate-y-4'>
          <h2 className='text-3xl md:text-5xl font-black text-white tracking-tight uppercase'>
            WE Have 50+ Years Experience
          </h2>
          <p className='text-sm md:text-lg font-light text-white/70 leading-relaxed'>
            In the Construction Industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus ratione molestias harum, ullam ad blanditiis culpa eos nisi temporibus in
            voluptate sit possimus officia vitae atque saepe quibusdam.
          </p>
        </div>
      </div>

      {/* Masked Background Image */}
      <div className='trans mask-trans relative w-full h-full min-h-[60vh] -mt-20 overflow-hidden'>
        <Image
          src={img}
          alt="Experience background"
          fill
          className='object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-60 transition-opacity'
        />
        <div className='absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500'></div>
      </div>
    </div>
  )
}

export default Experience 