'use client'

import React from 'react'
import Image from 'next/image'
import {
  Home,
  Building2,
  Factory,
  Hammer,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Clock
} from 'lucide-react'
import aboutimg from '../../public/about.jpg'
import Footer from '../components/Footer'

const services = [
  {
    id: 1,
    title: 'Residential Construction',
    category: 'Architecture',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Bespoke luxury homes and residential complexes designed for modern living with sustainable materials.'
  },
  {
    id: 2,
    title: 'Commercial Design',
    category: 'Infrastructure',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    description: 'Innovative and efficient office spaces and retail centers tailored to your business needs.'
  },
  {
    id: 3,
    title: 'Industrial Solutions',
    category: 'Logistics',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
    description: 'Large-scale industrial facilities, warehouses, and factories built to the highest safety standards.'
  },
  {
    id: 4,
    title: 'Precision Renovation',
    category: 'Refurbishment',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=1200&auto=format&fit=crop',
    description: 'Transforming legacy structures into contemporary masterpieces through technical expertise.'
  },
  {
    id: 5,
    title: 'Project Consultation',
    category: 'Management',
    icon: ClipboardCheck,
    image: 'https://images.unsplash.com/photo-1454165833767-027eeea15c3e?q=80&w=1200&auto=format&fit=crop',
    description: 'Full-spectrum project management and architectural consulting to ensure seamless execution.'
  }
]

const processes = [
  {
    title: 'Strategy & Planning',
    description: 'We define goals, budgets, and timelines with precision.',
    icon: TrendingUp
  },
  {
    title: 'Design & Architecture',
    description: 'Our architects create detailed blueprints and 3D models.',
    icon: Building2
  },
  {
    title: 'Compliance & Safety',
    description: 'Rigorous adherence to local regulations and safety codes.',
    icon: ShieldCheck
  },
  {
    title: 'Execution & Quality',
    description: 'Masterful construction with continuous quality oversight.',
    icon: CheckCircle2
  }
]

const Page = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={aboutimg}
          alt="Our Services"
          fill
          className="object-cover opacity-90 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background"></div>

        <div className="relative z-10 text-center space-y-6 px-4">
          <div className="inline-block px-4 py-1.5 bg-primary border border-primary/20 rounded-full shadow-lg shadow-primary/20">
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none">Our Expertise</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Building Without <span className="text-green-500">Limits</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl font-light leading-relaxed">
            From visionary architecture to precision engineering, we deliver excellence at every scale.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 -mt-32 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="group flex flex-col bg-card border border-border/50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white">
                    <Icon size={24} />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest group/btn transition-all">
                    Explore Details
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}

          {/* CTA Card */}
          <div className="lg:col-span-1 bg-primary p-12 rounded-[2.5rem] flex flex-col justify-center items-start text-primary-foreground space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tight leading-none">
              Have a custom <br /><span className="text-green-400">Project?</span>
            </h2>
            <p className="text-primary-foreground/80 font-light">
              We specialize in complex, non-standard constructions. Let's discuss your unique vision.
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-green-400 hover:text-white transition-all shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-6 py-24 border-t border-border/50">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              We follow a rigorous methodological approach to ensure every project meets our gold standard of quality and safety.
            </p>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-2xl">
              <Clock className="text-primary" size={24} />
              <div>
                <span className="block font-bold text-sm uppercase">Time Efficiency</span>
                <span className="text-xs text-muted-foreground">30% faster delivery on average</span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {processes.map((proc, i) => {
              const Icon = proc.icon
              return (
                <div key={i} className="p-8 bg-card border border-border/50 rounded-3xl hover:bg-primary/5 transition-colors group">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{proc.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{proc.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-black text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-tight">
              Committed to <br /><span className="text-green-500">Global Excellence</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <span className="text-5xl font-black text-primary block">100%</span>
                <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Safety Compliance</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-black text-primary block">ISO</span>
                <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Certified Standard</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-black text-primary block">24/7</span>
                <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Project Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page