'use client'

import { useState, useEffect, useRef } from 'react'

interface SmartHeaderProps {
  children: React.ReactNode
}

export default function SmartHeader({ children }: SmartHeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  // Use a 'mounted' state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Background change threshold
      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Hide/Show logic
      if (currentScrollY <= 72) {
        setIsVisible(true)
      } 
      else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false) // Scrolling down
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true) // Scrolling up
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // To prevent hydration mismatch, we render the EXACT SAME classes on server and client
  // only applying the dynamic logic after mounting.
  return (
    <div
      className={`header-smart fixed left-0 right-0 z-[1000] w-full transition-all duration-300 ease-in-out ${
        mounted && isScrolled ? 'shadow-lg bg-[#0A0A0A]/95' : 'bg-[#0A0A0A]'
      }`}
      style={{ 
        top: (mounted && !isVisible) ? '-72px' : '0',
        height: '72px'
      }}
    >
      {children}
    </div>
  )
}
