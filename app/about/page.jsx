'use client'
import Image from 'next/image'
import aboutimg from '../../public/about.jpg'
import { Target, Eye, Shield, ArrowRight } from 'lucide-react'

const About = () => {
  const sections = [
    {
      title: 'Our Mission',
      icon: Target,
      description: 'To deliver exceptional construction services that meet the highest standards of quality, safety, and sustainability, transforming visions into architectural realities.'
    },
    {
      title: 'Our Vision',
      icon: Eye,
      description: 'To lead the global construction industry through innovation, integrity, and a relentless focus on customer satisfaction and environmental stewardship.'
    },
    {
      title: 'Our Values',
      icon: Shield,
      description: 'Integrity, excellence, teamwork, and innovation are at the heart of everything we do, ensuring lasting results for our clients and communities.'
    }
  ]

  return (
    <div className="bg-gray-700/90 text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={aboutimg}
          alt="About Decor Construction"
          fill
          className="object-cover opacity-90 scale-105 animate-pulse-slow"
          priority
        />
        <div className="absolute "></div>

        <div className="relative z-10 text-center space-y-4 px-4">
          <h1 className="text-3xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-700">
            Our <span className="text-green-300">Legacy</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed">
            Building the future with foundations of excellence since 1975.
          </p>
        </div>

        {/* SVG Decorative Shape (Matching Site styling) */}
      </div>

      {/* Mission/Vision/Values Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div
                key={index}
                className="group relative p-10 bg-whit  border border-white rounded-[3rem] hover:bg-white/10 hover:border-white/50 transition-all duration-500 hover:-translate-y-4"
              >
                <div className="absolute -top-6 left-10 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black  group-hover:rotate-6 transition-transform duration-500">
                  <Icon size={32} strokeWidth={2.5} />
                </div>

                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-white/50 text-lg font-light leading-relaxed group-hover:text-white/80 transition-colors">
                    {section.description}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <span className="font-bold uppercase text-xs tracking-widest">Read More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Custom accent line */}
                <div className="absolute bottom-10 right-10 w-2 h-12 bg-primary/20 rounded-full group-hover:bg-primary group-hover:h-20 transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA/Closing part could go here */}
    </div>
  )
}

export default About