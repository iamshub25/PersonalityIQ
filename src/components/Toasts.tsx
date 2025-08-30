'use client'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  }

  const typeIcons = {
    success: 'fa-check',
    error: 'fa-times',
    warning: 'fa-exclamation',
    info: 'fa-info'
  }

  return (
    <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg text-white font-semibold transform transition-all duration-300 shadow-lg ${typeStyles[type]} animate-slide-in-right`}>
      <div className="flex items-center">
        <i className={`fas ${typeIcons[type]} mr-2`}></i>
        <span>{message}</span>
        <button 
          onClick={onClose}
          className="ml-4 text-white/80 hover:text-white"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  )
}