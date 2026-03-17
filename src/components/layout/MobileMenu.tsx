'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAP, NAV_ITEMS } from '@/constants/siteConfig'

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
        className={`
          fixed top-0 right-0 h-full w-[280px] bg-[#1a1a1a] z-[1001]
          flex flex-col pt-20 pb-8 px-6
          shadow-[-4px_0_24px_rgba(0,0,0,0.4)]
          transition-transform duration-300 ease-in-out
          md:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <ul role="list" className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`
                    block px-4 py-3 rounded-btn font-body font-medium text-base
                    transition-colors duration-150
                    ${isActive
                      ? 'bg-accent text-white'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                    }
                  `}
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
            className="btn-accent btn-urgence w-full text-center block px-4 py-3 rounded-btn font-body font-semibold text-base"
            aria-label={`Appeler Sinnes Automobiles au ${NAP.phoneDisplay}`}
          >
            {NAP.phoneDisplay}
          </a>
          <p className="text-white/40 text-xs text-center mt-2 font-body">
            7j/7 · Intervention rapide
          </p>
        </div>
      </nav>

      {/* CTA sticky bottom — mobile uniquement */}
      <a
        href={`tel:${NAP.phoneTel}`}
        className="
          fixed bottom-0 left-0 right-0 z-[998]
          flex items-center justify-center gap-2
          bg-[#e53935] text-white
          font-body font-semibold text-base
          h-14 min-h-[44px]
          md:hidden
          shadow-[0_-2px_10px_rgba(0,0,0,0.3)]
        "
        aria-label={`Appeler Sinnes Automobiles au ${NAP.phoneDisplay} — 7j/7`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        {NAP.phoneDisplay}
      </a>
    </>
  )
}
