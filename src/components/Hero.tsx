'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {

  const handleStartAssessment = () => {
    window.location.href = '/test'
  }

  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-4s' }}></div>
      </div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center max-w-8xl mx-auto">
          {/* Left Content */}
          <div className="animate-fade-in text-center lg:text-left lg:col-span-3">
            <div className="mb-4 mt-6">
              <span className="inline-block px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/20">
                ✨ AI-Powered Insights
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight">
              It&apos;s time to feel better about
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent block">
                your work and yourself.
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your self-understanding with our advanced AI personality assessment. 
              <span className="text-white font-semibold">Discover hidden patterns</span>, unlock your potential, 
              and embark on a journey of meaningful personal growth.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
              <button 
                onClick={handleStartAssessment}
                className="group bg-gradient-to-r from-white to-gray-100 text-gray-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Start Free Assessment
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-white/40 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  More Information
                </span>
              </button>
            </div>
            
            {/* Enhanced Social Proof */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">500K+</div>
                <div className="text-white/80 text-xs sm:text-sm font-medium">Happy Users</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">4.9⭐</div>
                <div className="text-white/80 text-xs sm:text-sm font-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">15M+</div>
                <div className="text-white/80 text-xs sm:text-sm font-medium">Insights Generated</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Right Content */}
          <div className="animate-fade-in lg:col-span-2" style={{ animationDelay: '300ms' }}>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>
              <div className="relative z-10 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm bg-white/5">
                <Image 
                  src="https://res.cloudinary.com/dyd30abcs/image/upload/v1756640357/1_bdq5ez.png" 
                  alt="Personality Assessment" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2"></div>
        </div>
      </div>
    </section>
  )
}