'use client'
import Image from 'next/image'
import aboutimg from '../../public/about.jpg'
const About = () => {
  return (
   <div>
     <div className="h-[100%] relative">
      <div className="About  z-10 absolute rotate-180">
      </div>
      <Image src={aboutimg} alt="pattern" className="opacity-100  absolute h-[100vh] w-full" />
        <p className='absolute top-90 m-2 sm:left-20 sm:w-1/2 md:w-1/2 lg:w-1/2 text-center aboutBg p-10 z-10 rounded-xl '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, aperiam consequuntur tempore possimus quibusdam officiis deleniti nemo facilis excepturi veniam aliquid exercitationem dolor asperiores quis. Accusamus harum corporis mollitia obcaecati.
        </p>
    </div>
   </div>
  )
}

export default About