'use client'
import React from 'react'
import Link from 'next/link'
import FootImg from '../../public/conSite.png'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Hammer
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Our Projects', href: '/projects' },
      { name: 'Our Team', href: '/#team' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Residential Construction', href: '/services#residential' },
      { name: 'Commercial Design', href: '/services#commercial' },
      { name: 'Renovation & Remodeling', href: '/services#renovation' },
      { name: 'Interior Design', href: '/services#interior' },
    ],
    socials: [
      { icon: Instagram, href: '#', label: 'Instagram' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Facebook, href: '#', label: 'Facebook' },
    ]
  }

  return (
    <footer className='relative w-full bg-black text-white pt-20 pb-10 px-4 md:px-8 top-[100vh] border-t border-white/10'>
      {/* Background Decorative Element */}
      <Image src={FootImg} alt="Footer Decoration" className="absolute opacity-20 top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>

          {/* Column 1: Brand & Bio */}
          <div className='space-y-6'>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:rotate-6 transition-transform duration-300">
                D
              </div>
              <span className="text-2xl font-bold bg-clip-text text-green-200">
                Decor<span className="text-white">Constructions</span>
              </span>
            </Link>
            <p className='text-white/60 leading-relaxed max-w-xs'>
              Excellence in every detail. We build sustainable, elegant, and functional spaces that stand the test of time.
            </p>
            <div className='flex gap-4'>
              {footerLinks.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300 group'
                  aria-label={social.label}
                >
                  <social.icon size={18} className='group-hover:scale-110 transition-transform' />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white uppercase tracking-wider mb-2'>Quick Links</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-white/60 hover:text-primary flex items-center gap-2 group transition-colors'>
                    <ArrowRight size={14} className='opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all' />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white uppercase tracking-wider mb-2'>Our Services</h3>
            <ul className='space-y-3'>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-white/60 hover:text-primary flex items-center gap-2 group transition-colors'>
                    <ArrowRight size={14} className='opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all' />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white uppercase tracking-wider mb-2'>Get In Touch</h3>
            <div className='space-y-4'>
              <div className='flex items-start gap-3 group'>
                <div className='mt-1 text-primary'><MapPin size={20} /></div>
                <p className='text-white/60 group-hover:text-white transition-colors cursor-default'>
                  123 Construction Ave, <br />
                  Design City, DC 45678
                </p>
              </div>
              <div className='flex items-center gap-3 group'>
                <div className='text-primary'><Phone size={18} /></div>
                <a href="tel:+1234567890" className='text-white/60 group-hover:text-white transition-colors'>
                  +1 (234) 567-890
                </a>
              </div>
              <div className='flex items-center gap-3 group'>
                <div className='text-primary'><Mail size={18} /></div>
                <a href="mailto:info@decorcon.com" className='text-white/60 group-hover:text-white transition-colors'>
                  info@decorcon.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40'>
          <p>© {currentYear} DecorConstructions. All rights reserved.</p>
          <div className='flex gap-8'>
            <Link href='/privacy' className='hover:text-white transition-colors'>Privacy Policy</Link>
            <Link href='/terms' className='hover:text-white transition-colors'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
