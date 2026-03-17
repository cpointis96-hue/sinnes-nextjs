'use client'
import React from 'react'

interface Step {
  num: number
  title: string
  desc: string
}

interface ProcessStepsProps {
  steps: Step[]
  className?: string
  theme?: 'dark' | 'light'
}

export default function ProcessSteps({ steps, className = '', theme = 'dark' }: ProcessStepsProps) {
  const isLight = theme === 'light'
  return (
    <div className={`relative ${className}`}>
      {/* Ligne verticale connectant les cercles — mobile uniquement */}
      <div className="absolute left-[31px] top-[48px] bottom-[48px] w-px bg-[#FFD700]/30 md:hidden" />

      <div className="flex flex-col md:flex-row md:gap-0 gap-0">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className="flex-1 flex items-start gap-8 pb-10 last:pb-0
                       md:flex-col md:items-center md:text-center md:pb-0 md:px-4
                       relative"
          >
            {/* Flèche entre étapes — desktop uniquement */}
            {idx < steps.length - 1 && (
              <div className="hidden md:flex absolute right-0 top-8 translate-x-1/2 z-10 items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}

            {/* Cercle numéroté */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#FFD700] flex items-center justify-center z-10"
              style={{ background: isLight ? '#F9FAFB' : '#0A0A0A' }}
            >
              <span className="font-heading font-bold text-xl" style={{ color: '#FFD700' }}>
                {step.num}
              </span>
            </div>

            {/* Texte */}
            <div className="pt-3 md:pt-4">
              <h3
                className="font-heading font-bold text-xl md:text-lg leading-tight mb-1"
                style={{ color: isLight ? '#111111' : '#FFFFFF' }}
              >
                {step.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: isLight ? '#6B7280' : 'rgba(255,255,255,0.6)' }}
              >
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
