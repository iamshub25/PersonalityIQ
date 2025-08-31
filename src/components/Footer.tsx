'use client'

import React, { useState, useEffect } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleNewsletterSignup = async () => {
    if (!email.trim() || !isValidEmail(email)) {
      showMessage('Please enter a valid email address', 'error')
      return
    }

    setIsSubscribing(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsSubscribing(false)
      setEmail('')
      showMessage('Successfully subscribed to newsletter!', 'success')
      
      // Reset after 2 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 2000)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNewsletterSignup()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const showMessage = (message: string, type: 'success' | 'error' | 'info') => {
    // Simple toast notification (you might want to use a proper toast library)
    console.log(`${type}: ${message}`)
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
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 sm:col-span-2">
              <div className="mb-6">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  PersonalityIQ
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
              
              {/* Newsletter Signup */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Stay Updated</h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">Get the latest insights on personality psychology and self-improvement.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm sm:text-base"
                  />
                  <button 
                    onClick={handleNewsletterSignup}
                    disabled={isSubscribing}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-colors ${
                      isSubscribed 
                        ? 'bg-green-600' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubscribing ? (
                      <i className="fas fa-spinner fa-spin text-sm sm:text-base"></i>
                    ) : isSubscribed ? (
                      <i className="fas fa-check text-sm sm:text-base"></i>
                    ) : (
                      <i className="fas fa-arrow-right text-sm sm:text-base"></i>
                    )}
                  </button>
                </div>
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

        {/* Stats Banner */}
        <div className="py-8 sm:py-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">500K+</div>
              <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Active Users</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">2M+</div>
              <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Assessments Taken</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">16</div>
              <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Personality Types</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">95%</div>
              <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Satisfaction Rate</div>
            </div>
          </div>
        </div>



        {/* Bottom Footer */}
        <div className="py-6 sm:py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-4 md:mb-0">
              <div className="text-gray-300 text-xs sm:text-sm">
                © 2024 PersonalityIQ. All rights reserved.
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Cookie Policy</a>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <select className="bg-white/10 border border-white/20 rounded-lg px-2 sm:px-3 py-1 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-400">
                  <option value="en">🇺🇸 English</option>
                  <option value="es">🇪🇸 Español</option>
                  <option value="fr">🇫🇷 Français</option>
                  <option value="de">🇩🇪 Deutsch</option>
                  <option value="zh">🇨🇳 中文</option>
                </select>
              </div>
              
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