'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Features', href: 'features' },
    { label: 'How It Works', href: 'how-it-works' },
    // { label: 'Test', href: '/test', isExternal: true },
    { label: 'Testimonials', href: 'testimonials' },
    { label: 'Pricing', href: 'pricing' }
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          >
            PersonalityIQ
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">
              Sign In
            </button>
            <a href="/test" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-sm lg:text-base">
              Get Started
            </a>
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
          <div className="md:hidden bg-white border-t border-gray-200 py-3 sm:py-4">
            <div className="space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-3 sm:pt-4 border-t border-gray-200">
                <button className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium mb-2 text-sm sm:text-base">
                  Sign In
                </button>
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