'use client'

import { useState, useEffect } from 'react'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar() {
  const [, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('nav') && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  // const navItems = [
    // { label :'About us' ,href:'/about' }
    // { label: 'Features', href: 'features' },
    // { label: 'How It Works', href: 'how-it-works' },
    // { label: 'Test', href: '/test', isExternal: true },
    // { label: 'Testimonials', href: 'testimonials' },
    // { label: 'Pricing', href: 'pricing' }
  // ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          >
            <Link href={'/'}>Second Draft</Link>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div> */}

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {pathname !== '/login' && (
              <Link href="/login" className="flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-sm lg:text-base items-center gap-1">
               Sign In
              </Link>
            )}
            <Link href="/" className="flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-sm lg:text-base items-center gap-1">
             Get Started<ArrowRight size={18}/>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700 text-lg sm:text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 py-2 sm:py-3">
            <div className="space-y-2 sm:space-y-3">
              {/* {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
                >
                  {item.label}
                </Link>
              ))} */}
              <div className="px-4 pt-2 space-y-4 sm:pt-3 border-t border-gray-200">
                {pathname !== '/login' && (
                  <Link href="/login" className="flex bg-gradient-to-r justify-center from-blue-600 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-sm lg:text-base items-center gap-1">
                    Sign In
                  </Link>
                  )}
                <a href="/test" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}