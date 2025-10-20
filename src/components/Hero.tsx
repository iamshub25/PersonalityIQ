'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    setIsAuthenticated(!!token)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAF8F4] px-4 sm:px-6 py-16 sm:py-20 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-bg.svg)' }}>
      <div className="max-w-3xl text-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#0A2342] leading-tight mb-4 sm:mb-6">
          The First Draft Built Your Career. <br className="hidden sm:block" />
          The Second Draft Defines Your Legacy.
        </h1>

        <p className="text-base sm:text-lg text-[#2C5E4D] leading-relaxed mb-8 sm:mb-10 px-2">
          This isn&apos;t about finding another job. It&apos;s about uncovering the work you were meant to do. 
          Our insight-driven process helps you filter out the noise by decoding your personal motivations, 
          helping you build a practical roadmap based on your true, untapped potential.
        </p>

        <Link href={isAuthenticated ? '/dashboard' : '/login'}>
          <button className="bg-[#F4C86A] hover:bg-[#EAB64F] text-[#0A2342] font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition duration-300 cursor-pointer text-sm sm:text-base">
            Click to Re-Draft Your Journey
          </button>
        </Link>

        <p className="text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8 px-2">
          Trusted by mid-managers across Delhi · Mumbai · Bangalore · Kolkata
        </p>
      </div>
    </section>
  );
}
