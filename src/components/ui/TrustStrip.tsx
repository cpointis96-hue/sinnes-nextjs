'use client'
import React from 'react'

// ---------------------------------------------------------------------------
// SVG Icons — w-8 h-8 (32px), couleur #efad42 via currentColor
// strokeWidth 1.5 — style premium/branded automobile
// ---------------------------------------------------------------------------

export function IconEuro({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      <path d="M4 10h12" />
      <path d="M4 14h9" />
      <path d="M19 6a7 7 0 1 0 0 12" />
    </svg>
  )
}

export function IconCalendar({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2.5" ry="2.5" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="8" cy="15" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="16" cy="15" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconShield({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconWrench({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export function IconMapPin({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconClock({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

/** Clé automobile — lame + tête télécommande */
export function IconKey({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      {/* Anneau de clé */}
      <circle cx="7.5" cy="12" r="3.5" />
      {/* Lame */}
      <path d="M11 12h9" />
      {/* Crans de la lame */}
      <path d="M15 9.5v2.5" />
      <path d="M19 10.5v1.5" />
    </svg>
  )
}

/** Volant automobile */
export function IconSteering({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      {/* Cercle extérieur */}
      <circle cx="12" cy="12" r="9" />
      {/* Moyeu central */}
      <circle cx="12" cy="12" r="2.5" />
      {/* Branches du volant */}
      <path d="M12 9.5V3" />
      <path d="M4.87 16.5l5.19-3" />
      <path d="M19.13 16.5l-5.19-3" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface TrustStripItem {
  icon: React.ReactNode
  label: string
  sublabel: string
  href?: string
}

export interface TrustStripProps {
  items: TrustStripItem[]
  theme?: 'light' | 'shade'
  className?: string
}

// ---------------------------------------------------------------------------
// Composant TrustStrip
// ---------------------------------------------------------------------------

export default function TrustStrip({
  items,
  theme = 'light',
  className = '',
}: TrustStripProps) {
  const bg = theme === 'shade' ? 'bg-[#F0F3F7]' : 'bg-white'

  return (
    <div className={`${bg} ${className}`}>
      <div className="container-sinnes">
        {/* max-w-5xl = ~20% de réduction par rapport au container pleine largeur */}
        <div className="max-w-5xl mx-auto">
          <div
            className="
              grid grid-cols-2 md:grid-cols-4
              divide-x divide-[rgba(17,24,39,0.08)]
              [&>*:nth-child(n+3)]:border-t [&>*:nth-child(n+3)]:border-[rgba(17,24,39,0.08)]
              md:[&>*:nth-child(n+3)]:border-t-0
            "
          >
            {items.map((item, idx) => {
              const inner = (
                <div className="flex items-start justify-center gap-3 px-4 py-4 md:px-6 md:py-4">
                  <span style={{ color: '#efad42' }} className="flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="font-heading font-bold text-sm md:text-base leading-tight"
                      style={{ color: '#111111' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-body text-xs md:text-sm leading-snug mt-0.5"
                      style={{ color: '#888888' }}
                    >
                      {item.sublabel}
                    </p>
                  </div>
                </div>
              )

              if (item.href) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="group hover:bg-[rgba(17,24,39,0.03)] transition-colors duration-150"
                  >
                    {inner}
                  </a>
                )
              }

              return (
                <div key={idx}>
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
