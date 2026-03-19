/**
 * Header — Server Component
 * Le menu mobile est délégué à MobileMenu.tsx (Client Component).
 * Pas de 'use client' ici : le Server Component rend le HTML statique,
 * MobileMenu apporte l'interactivité (useState, usePathname).
 */

import Image from 'next/image'
import Link from 'next/link'
import { NAP, NAV_ITEMS } from '@/constants/siteConfig'
import NavDesktop from './NavDesktop'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="header-sticky" role="banner">
      <div className="container-sinnes flex items-center justify-between h-[72px]">

        {/* ── Logo (LCP critique) ── */}
        <Link
          href="/"
          aria-label="Sinnes Automobiles — Accueil"
          className="flex-shrink-0"
        >
          <Image
            src="/images/logo-avec-fond-noir-150x150.png"
            alt="Sinnes Automobiles — Serrurier automobile Nice"
            width={56}
            height={56}
            priority
            fetchPriority="high"
            className="rounded-md"
          />
        </Link>

        {/* ── Navigation desktop (Client Component pour aria-current) ── */}
        <NavDesktop />

        {/* ── CTA téléphone (visible partout) ── */}
        <a
          href={`tel:${NAP.phoneTel}`}
          className="btn-accent btn-urgence inline-flex flex-col items-center px-3 py-2 min-h-[44px] min-w-[44px]"
          aria-label={`Appeler Sinnes Automobiles — ${NAP.phoneDisplay}`}
        >
          <span className="font-body font-semibold text-sm leading-tight whitespace-nowrap">
            {NAP.phoneDisplay}
          </span>
          <span className="hidden md:block font-body text-xs opacity-90 leading-tight">
            7j/7 · Intervention rapide
          </span>
        </a>

        {/* ── Hamburger + Drawer mobile (Client Component) ── */}
        <MobileMenu />

      </div>
    </header>
  )
}
