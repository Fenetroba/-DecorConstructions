'use client'
import React from 'react'
import Image from 'next/image'
import { Linkedin, Twitter, Mail, Instagram, ArrowUpRight } from 'lucide-react'

const teamMembers = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Lead Architect',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
        bio: 'Visionary architect with 10+ years of experience in sustainable luxury design.',
        socials: {
            linkedin: '#',
            twitter: '#',
            email: 'mailto:sarah@decor.com'
        }
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Senior Engineer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
        bio: 'Expert in structural engineering and innovative construction methodologies.',
        socials: {
            linkedin: '#',
            twitter: '#',
            email: 'mailto:michael@decor.com'
        }
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        role: 'Interior Designer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
        bio: 'Creating award-winning interior spaces that blend functionality with elegance.',
        socials: {
            linkedin: '#',
            instagram: '#',
            email: 'mailto:elena@decor.com'
        }
    },
    {
        id: 4,
        name: 'David Kim',
        role: 'Project Manager',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
        bio: 'Ensuring seamless execution and timely delivery of complex projects.',
        socials: {
            linkedin: '#',
            twitter: '#',
            email: 'mailto:david@decor.com'
        }
    }
]

const OurTeam = () => {
    return (
        <section className='relative w-full py-20 px-4 top-[100vh] md:px-8 bg-background overflow-hidden' id="team">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10 rounded-full translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-primary/5 blur-3xl -z-10 rounded-full -translate-x-1/2 pointer-events-none" />

            <div className='container mx-auto max-w-7xl'>
                {/* Header */}
                <div className='text-center mb-16 space-y-4'>
                    <h2 className='text-4xl md:text-5xl font-bold'>
                        Meet Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>Experts</span>
                    </h2>
                    <p className='text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed'>
                        The creative minds and technical wizards behind our award-winning projects.
                        We are dedicated to bringing your vision to life with precision and passion.
                    </p>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className='group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2'
                        >
                            {/* Image Container */}
                            <div className='relative h-[320px] w-full overflow-hidden'>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className='object-cover transition-transform duration-700 will-change-transform group-hover:scale-110'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />

                                {/* Overlay Gradient on Hover */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                                {/* Social Icons Overlay */}
                                <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-75'>
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} className='p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors'>
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} className='p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors'>
                                            <Twitter size={20} />
                                        </a>
                                    )}
                                    {member.socials.instagram && (
                                        <a href={member.socials.instagram} className='p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors'>
                                            <Instagram size={20} />
                                        </a>
                                    )}
                                    <a href={member.socials.email} className='p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors'>
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='relative p-6 bg-card group-hover:bg-primary/5 transition-colors duration-300'>
                                {/* Floating Action Button Style Icon */}
                                <div className="absolute -top-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 delay-100">
                                    <ArrowUpRight size={24} />
                                </div>

                                <h3 className='text-xl font-bold mb-1 text-foreground'>{member.name}</h3>
                                <p className='text-sm font-medium text-primary mb-3 uppercase tracking-wide'>{member.role}</p>
                                <p className='text-muted-foreground text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300'>
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam
