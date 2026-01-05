'use client'
import Image from "next/image";
import bg from "../../public/image.jpg"
const Hero = () => {
  return (
     <div className="relative ">
     <Image src={bg} alt="pattern" className="absolute w-full h-[100vh]"/>
        <div className="magicpattern w-full h-[100vh] absolute"  >
    
      </div>
        <div className="magicpattern w-full h-[100vh] absolute rotate-180"  >
    
      </div>
     </div>
  )
}

export default Hero