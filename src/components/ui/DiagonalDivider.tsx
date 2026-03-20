/**
 * DiagonalDivider — séparateur de section signature Sinnes
 * Parallélogrammes répétés (SVG inline pattern) + volant 3 branches centré
 */
import type { ReactNode } from 'react'

// ─── Volant 3 branches (fidèle à sinnes.fr) ───────────────────────────────
// viewBox 44×44 — centre (22,22) — rayon ext 19 — rayon hub 5.5
// Spokes à 0°/120°/240° depuis 12h (direction haut)
export function SteeringWheelIcon({
  size = 42,
  color = '#D4A017',
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Jante extérieure — épaisse */}
      <circle cx="22" cy="22" r="19" stroke={color} strokeWidth="3.5" />
      {/* Hub central rempli — pad de klaxon */}
      <circle cx="22" cy="22" r="5.5" fill={color} />
      {/* Spoke haut (12h) */}
      <line x1="22" y1="3"    x2="22" y2="16.5" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Spoke bas-gauche (8h) — direction (-sin120, cos120) */}
      <line x1="5.6"  y1="31.5" x2="17.2" y2="24.2" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Spoke bas-droite (4h) — direction (sin120, cos120) */}
      <line x1="38.4" y1="31.5" x2="26.8" y2="24.2" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Icône clé automobile (bullet branding) ────────────────────────────────
export function KeyIcon({
  size = 20,
  color = '#D4A017',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="7" cy="7" r="5" stroke={color} strokeWidth="1.5" />
      <circle cx="7" cy="7" r="2" fill={color} />
      <line x1="11" y1="11" x2="18" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="15" x2="15" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="13" x2="17" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Barre SVG pattern ─────────────────────────────────────────────────────
function PatternBar({ color, id }: { color: string; id: string }) {
  return (
    <div className="flex-1 min-w-0" style={{ height: 21 }}>
      <svg
        width="100%"
        height="21"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} x="0" y="0" width="20" height="21" patternUnits="userSpaceOnUse">
          {/* 12px shape / 8px gap — densité 60%, fidèle à sinnes.fr */}
          <polygon points="6,2 18,2 14,19 2,19" fill={color} />
        </pattern>
        </defs>
        <rect width="100%" height="21" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}

// ─── DiagonalDivider ───────────────────────────────────────────────────────
export default function DiagonalDivider({
  icon,
  color = '#1A1A1A',
  className = '',
  id = 'dd',
}: {
  icon?: ReactNode
  color?: string
  className?: string
  id?: string
}) {
  return (
    <div
      className={`w-full flex items-center gap-3 md:gap-6 pt-[6px] pb-[8px] ${className}`}
      aria-hidden="true"
    >
      <PatternBar color={color} id={`${id}-l`} />
      {icon && <div className="shrink-0 flex-none">{icon}</div>}
      <PatternBar color={color} id={`${id}-r`} />
    </div>
  )
}
