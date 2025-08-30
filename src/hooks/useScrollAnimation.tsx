import { useEffect, useRef, useState } from 'react'

// Hook for scroll-triggered animations
export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    const currentRef = ref.current
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return { ref, isVisible }
}

// Hook for toast notifications
export function useToast() {
  const [toasts, setToasts] = useState<Array<{
    id: number
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
  }>>([])

  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, 3000)
  }

  return { toasts, showToast }
}

// Utility functions
export const debounce = (func: (...args: unknown[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: unknown[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const throttle = (func: (...args: unknown[]) => void, limit: number) => {
  let inThrottle: boolean
  return function(...args: unknown[]) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}