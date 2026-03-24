'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/constants/siteConfig'
// Update for hydration fix


export default function NavDesktop() {
  const pathname = usePathname()

  return (
    <nav aria-label="Navigation principale" className="hidden md:block">
      <ul role="list" className="flex items-center gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  relative px-3 py-2 rounded-btn
                  font-body font-medium text-sm
                  transition-colors duration-150
                  focus-visible:outline-accent
                  ${isActive
                    ? 'text-accent'
                    : 'text-white/85 hover:text-white'
                  }
                `}
              >
                {item.label}
                {/* Underline actif */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
