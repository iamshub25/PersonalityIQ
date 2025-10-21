'use client'

import { useState, useEffect } from 'react'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Swal from 'sweetalert2'


export default function Navbar() {
  const [, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const token = localStorage.getItem('authToken')
    const name = localStorage.getItem('username')
    setIsAuthenticated(!!token)
    setUsername(name || '')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('nav') && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
      if (!target.closest('.profile-dropdown') && showDropdown) {
        setShowDropdown(false)
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
    setShowDropdown(false)
  }, [pathname])

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    const name = localStorage.getItem('username')
    setIsAuthenticated(!!token)
    setUsername(name || '')
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#EF4444',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
      position: 'top-end',
      toast: true,
      width: '350px'
    })

    if (result.isConfirmed) {
      localStorage.removeItem('authToken')
      localStorage.removeItem('username')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userData')
      setIsAuthenticated(false)
      setShowDropdown(false)
      
      await Swal.fire({
        icon: 'success',
        title: 'Logged out successfully',
        timer: 1500,
        showConfirmButton: false,
        position: 'top-end',
        toast: true
      })
      
      window.location.href = '/'
    }
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
    <>
      {/* Mobile Floating Menu Button */}
      {pathname !== '/dashboard' && (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-gray-800 text-white rounded-full shadow-lg z-40 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

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
            {!mounted ? (
              <div className="w-24 h-10"></div>
            ) : isAuthenticated ? (
              <div className="relative profile-dropdown">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800 font-medium text-sm">Hi, {username}</span>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    {username.charAt(0).toUpperCase()}
                  </button>
                </div>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link
                      href="/dashboard?tab=profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer  "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : pathname !== '/login' && (
              <Link href="/login" className="flex border border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all text-sm lg:text-base items-center gap-1">
               Sign In
              </Link>
            )}
          </div>

        </div>

      </div>
    </nav>

    {/* Mobile Fullscreen Sidebar */}
    {isMobileMenuOpen && (
      <div className="md:hidden fixed inset-0 z-[60] bg-white">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Menu
            </h1>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-6">
            <div className="space-y-4">
              {pathname !== '/login' && !isAuthenticated && (
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-between gap-4 p-4 rounded-xl text-left transition-all hover:bg-gray-50 border-2 border-gray-300"
                >
                  <span className="text-lg font-medium">Sign In</span>
                  <ArrowRight size={18}/>
                </Link>
              )}
              {/* <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-between gap-4 p-4 rounded-xl text-left transition-all hover:bg-gray-50 border-2 border-gray-300"
              >
                <span className="text-lg font-medium">Get Started</span>
                <ArrowRight size={20} />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}