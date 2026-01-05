'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Hammer, Info, Briefcase, Home } from 'lucide-react'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Hammer },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'About', href: '/about', icon: Info },
  ]

  return (
    <nav
      className={`fixed backdrop-blur-[2px] top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled
          ? 'bg-black/60 dark:bg-black/70 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:rotate-3 transition-transform duration-300">
              D
            </div>
            <span className="text-2xl font-bold bg-clip-text text-green-600 bg-gradient-to-r from-primary to-primary/60">
              Decor<span className="text-white">Constructions</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-muted-foreground hover:text-primary transition-colors font-medium group py-2 text-white"
              >
                <div className="flex items-center gap-1.5 text-white">
                  <span>{link.name}</span>
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/70 backdrop-blur-xl z-40 md:hidden transition-all duration-300 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
        style={{ top: '0', height: '100vh' }}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-3 right-2 p-2 text-foreground/60 hover:text-foreground"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center w-full px-8 space-y-6">
          {navLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-cente gap-3 text-[18px] font-semibold text-foreground/80 group-hover:text-primary transition-colors p-2 rounded-[2px] hover:bg-primary/5">
                  <Icon className="w-6 h-6" />
                  {link.name}
                </div>
              </Link>
            )
          })}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-medium shadow-xl shadow-primary/20"
          >
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar