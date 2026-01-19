'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Plus, Filter, Search } from 'lucide-react'
import aboutimg from '../../public/about.jpg'

const projects = [
  {
    id: 1,
    title: 'Modern Glass Tower',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    description: 'A 45-story sustainable office building in the heart of the business district.',
    year: '2023',
    location: 'Dubai, UAE'
  },
  {
    id: 2,
    title: 'Luxury Peninsula Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    description: 'A masterpiece of contemporary architecture blending seamlessly with the coastline.',
    year: '2022',
    location: 'Malibu, USA'
  },
  {
    id: 3,
    title: 'Heritage Museum Resto',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop',
    description: 'Restoration and expansion of the 19th-century National Art Gallery.',
    year: '2023',
    location: 'London, UK'
  },
  {
    id: 4,
    title: 'Eco-Smart Stadium',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1577083165350-1670408953e7?q=80&w=1200&auto=format&fit=crop',
    description: 'The world\'s most sustainable sports arena powered by 100% renewable energy.',
    year: '2024',
    location: 'Berlin, Germany'
  },
  {
    id: 5,
    title: 'Tech Innovation Hub',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    description: 'A collaborative workspace designed for the next generation of tech giants.',
    year: '2023',
    location: 'San Francisco, USA'
  },
  {
    id: 7,
    title: 'Skyline Plaza',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop',
    description: 'A mixed-use complex featuring retail, dining, and luxury living spaces.',
    year: '2024',
    location: 'New York, USA'
  }
]

const categories = ['All', 'Commercial', 'Residential', 'Cultural', 'Infrastructure']

const Page = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="bg-background text-foreground min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={aboutimg}
          alt="Our Projects"
          fill
          className="object-cover opacity-90 scale-105"
          priority
        />
        <div className="absolute inset-0  to-background"></div>

        <div className="relative z-10 text-center space-y-6 px-4">
          <div className="inline-block px-3 py-1 bg-primary/80 border border-primary/20 rounded-full">
            <span className="text-white text-xs font-bold uppercase tracking-widest leading-none">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Architectural <span className="text-green-500">Excellence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white text-lg md:text-xl font-light leading-relaxed">
            Explore our curated selection of groundbreaking projects across industries and continents.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative group w-full md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-12 pr-4 py-2.5 bg-muted border border-border/50 rounded-full text-sm focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-700"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Content Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                  </div>
                  <span className="text-white/60 text-xs font-mono">{project.year}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight transform group-hover:-translate-y-1 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light flex items-center gap-1">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {project.location}
                  </p>
                </div>

                <p className={`text-white/50 text-sm leading-relaxed overflow-hidden transition-all duration-500 ${hoveredProject === project.id ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                  {project.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="absolute top-6 right-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 hover:bg-primary hover:border-primary transition-all duration-500">
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats/Closing Section */}
      <div className="bg-primary/5 border-t border-border/50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Completed Projects', value: '250+' },
              { label: 'Global Offices', value: '12' },
              { label: 'Architects', value: '80+' },
              { label: 'Awards Won', value: '45' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl md:text-5xl font-black text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page