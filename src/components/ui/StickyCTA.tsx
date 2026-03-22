'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAP } from '@/constants/siteConfig'

interface StickyCTAProps {
  variant?: 'urgency' | 'service'
  label?: string
  scrollThreshold?: number
}

export default function StickyCTA({
  variant = 'service',
  label,
  scrollThreshold = 250
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= scrollThreshold) {
        setIsVisible(false)
      }
      else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(true) // Scrolling down
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(false) // Scrolling up
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  const defaultLabel = variant === 'urgency' ? 'URGENCE' : 'Obtenir un devis gratuit'
  const displayLabel = label || defaultLabel

  const bgColor = variant === 'urgency' ? '#e53935' : '#EFAD42'
  const textColor = variant === 'urgency' ? '#FFFFFF' : '#0A0A0A'

  // Only render on client to avoid hydration issues with AnimatePresence
  if (!mounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] md:hidden pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
        >
          <a
            href={`tel:${NAP.phoneTel}`}
            className="flex items-center justify-center w-full font-body font-bold transition-transform active:scale-[0.98]"
            style={{ backgroundColor: bgColor, color: textColor, minHeight: '64px' }}
          >
            <span className="text-[15px] min-[340px]:text-base sm:text-lg">
              {displayLabel} : <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
