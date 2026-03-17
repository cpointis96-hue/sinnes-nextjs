'use client'

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion'

const variants: Record<string, Variants> = {
  fadeInDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 18,
        duration: 0.7,
      },
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
}

interface ScrollRevealProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView'> {
  animation?: keyof typeof variants
  delay?: number
  className?: string
  children: React.ReactNode
  as?: 'div' | 'p' | 'section' | 'article' | 'h1' | 'h2' | 'h3'
}

export default function ScrollReveal({
  animation = 'fadeInDown',
  delay = 0,
  className,
  children,
  as = 'div',
  ...props
}: ScrollRevealProps) {
  const v = variants[animation]
  const MotionComponent = motion[as] as React.ElementType

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={v}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
