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
        <div className="py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  PersonalityIQ
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Transform your life through AI-powered personality insights. 
                  Discover your true potential and accelerate your personal growth journey.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {['twitter', 'facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      console.log(`${social} clicked`)
                    }}
                  >
                    <i className={`fab fa-${social} text-white`}></i>
                  </a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">Get the latest insights on personality psychology and self-improvement.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <button 
                    onClick={handleNewsletterSignup}
                    disabled={isSubscribing}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isSubscribed 
                        ? 'bg-green-600' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubscribing ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : isSubscribed ? (
                      <i className="fas fa-check"></i>
                    ) : (
                      <i className="fas fa-arrow-right"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Personality Test</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career Insights</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Growth Analytics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="py-12 border-t border-white/10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2M+</div>
              <div className="text-gray-300">Assessments Taken</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">16</div>
              <div className="text-gray-300">Personality Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="py-12 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Download Our App</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Take your personal growth journey on the go. Available on all platforms.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="flex items-center bg-white/10 hover:bg-white/20 rounded-lg px-6 py-3 transition-colors">
              <i className="fab fa-apple text-2xl mr-3"></i>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center bg-white/10 hover:bg-white/20 rounded-lg px-6 py-3 transition-colors">
              <i className="fab fa-google-play text-2xl mr-3"></i>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
            <a href="#" className="flex items-center bg-white/10 hover:bg-white/20 rounded-lg px-6 py-3 transition-colors">
              <i className="fab fa-windows text-2xl mr-3"></i>
              <div className="text-left">
                <div className="text-xs text-gray-300">Available on</div>
                <div className="font-semibold">Microsoft Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 md:mb-0">
              <div className="text-gray-300">
                © 2024 PersonalityIQ. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Cookie Policy</a>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:border-blue-400">
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
                className={`w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <i className="fas fa-chevron-up text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}