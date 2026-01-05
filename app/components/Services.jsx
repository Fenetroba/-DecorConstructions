'use client'
import React from 'react'
import { Home, Building2, Hammer, ClipboardList, ArrowRight, PaintBucket, HardHat } from 'lucide-react'

const services = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'Building dream homes with precision, from modern villas to cozy cottages, tailored to your lifestyle.'
    },
    {
        icon: Building2,
        title: 'Commercial Design',
        description: 'Innovative workspaces and retail environments that inspire productivity and leave a lasting impression.'
    },
    {
        icon: Hammer,
        title: 'Renovation & Remodeling',
        description: 'Transforming existing spaces into modern masterpieces while preserving their unique character.'
    },
   
]

const Services = () => {
    return (
        <section className=' relative w-full top-[100vh] bg-background py-24 px-4 md:px-8 overflow-hidden' id="services">
            <div className='container mx-auto max-w-7xl'>
                <div className='services absolute'>
                    

                </div>

                {/* Header */}
                <div className='text-center mb-20'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                        Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>Services</span>
                    </h2>
                    <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
                        We deliver excellence across every stage of construction, bringing expertise and innovation to every project.
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className='group relative p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300'
                            >
                                {/* Icon */}
                                <div className='w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                                    {service.title}
                                </h3>
                                <p className='text-muted-foreground leading-relaxed mb-6'>
                                    {service.description}
                                </p>

                                {/* Learn More Link */}
                                <div className='flex items-center gap-2 text-primary font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300'>
                                    <span>Learn More</span>
                                    <ArrowRight size={16} />
                                </div>

                                {/* Decorative corner */}
                                <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl pointer-events-none' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services