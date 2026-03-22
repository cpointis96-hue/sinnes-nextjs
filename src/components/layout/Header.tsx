import Image from 'next/image'
import Link from 'next/link'
import { NAP } from '@/constants/siteConfig'
import NavDesktop from './NavDesktop'
import MobileMenu from './MobileMenu'
import SmartHeader from './SmartHeader'

export default function Header() {
  return (
    <SmartHeader>
      <header role="banner">
        <div className="container-sinnes flex items-center justify-between h-[72px]">
          {/* ── Logo ── */}
          <Link href="/" aria-label="Sinnes Automobiles — Accueil" className="flex-shrink-0">
            <Image
              src="/images/logo-sinnes-automobiles.svg"
              alt="Sinnes Automobiles — Serrurier automobile Nice"
              width={240}
              height={100}
              priority
              className="object-contain h-12 sm:h-14 md:h-16 w-auto"
            />
          </Link>

          {/* ── Navigation desktop ── */}
          <NavDesktop />

          {/* ── CTA téléphone ── */}
          <a
            href={`tel:${NAP.phoneTel}`}
            className="btn-accent btn-urgence inline-flex flex-col items-center px-3 py-2 min-h-[44px] min-w-[44px]"
            aria-label={`Appeler Sinnes Automobiles — ${NAP.phoneDisplay}`}
          >
            <span className="font-body font-semibold text-[13px] sm:text-sm leading-tight whitespace-nowrap">
              {NAP.phoneDisplay}
            </span>
          </a>

          {/* ── Hamburger + Drawer mobile ── */}
          <MobileMenu />
        </div>
      </header>
    </SmartHeader>
  )
}
