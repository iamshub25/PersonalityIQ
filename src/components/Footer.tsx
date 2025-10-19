'use client'

import React, { useState, useEffect } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Show/hide back to top button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 sm:col-span-2">
              <div className="mb-6">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  Second Draft
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md text-sm sm:text-base">
                  Transform your life through AI-powered personality insights. 
                  Discover your true potential and accelerate your personal growth journey.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4 mb-6">
                {['twitter', 'facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      console.log(`${social} clicked`)
                    }}
                  >
                    <i className={`fab fa-${social} text-white text-sm sm:text-base`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Product, Resources, Company - Compact Flex Layout */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Product</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Personality Test</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Career Insights</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Growth Analytics</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Web Platform</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Resources</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Research</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Help Center</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Community</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Press</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="py-4 sm:py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-4 md:mb-0">
              <div className="text-gray-300 text-xs sm:text-sm">
                © 2024 SecondDraft. All rights reserved.
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Cookie Policy</a>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Back to Top Button */}
              <button 
                onClick={scrollToTop}
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <i className="fas fa-chevron-up text-white text-sm sm:text-base"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}