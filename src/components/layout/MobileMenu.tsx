'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAP, NAV_ITEMS } from '@/constants/siteConfig'
// Update for hydration fix


export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Bouton hamburger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-btn focus-visible:outline-accent"
      >
        {/* Trois lignes hamburger / croix */}
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-200 origin-center ${
            open ? 'rotate-45 translate-y-[7px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-200 ${
            open ? 'opacity-0 scale-x-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-200 origin-center ${
            open ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
      </button>

      {/* Overlay sombre */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-[999] md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer slide-in depuis la droite */}
      <nav
        id="mobile-menu"
        aria-label="Menu mobile"
        className={`fixed top-0 right-0 h-full w-[280px] z-[1001] flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ 
          backgroundColor: '#1A1A1A', 
          boxShadow: '-4px 0 24px rgba(0,0,0,0.6)',
          borderLeft: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <ul role="list" className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-maven), sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textDecoration: 'none',
                    transition: 'all 150ms ease',
                    backgroundColor: isActive ? '#EFAD42' : 'transparent',
                    color: isActive ? '#000000' : 'rgba(255,255,255,0.9)'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA téléphone dans le drawer */}
        <div className="mt-auto">
          <a
            href={`tel:${NAP.phoneTel}`}
            className="btn-accent btn-urgence w-full rounded-btn font-body font-semibold text-base"
            style={{ backgroundColor: '#E53935', color: '#FFFFFF' }}
            aria-label={`Appeler Sinnes Automobiles au ${NAP.phoneDisplay}`}
          >
            <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
          </a>
          <p className="text-white/40 text-xs text-center mt-2 font-body">
            7j/7 · Intervention rapide
          </p>
        </div>
      </nav>
    </>
  )
}
