import Image from 'next/image'
import Link from 'next/link'
import { NAP, ORG, SOCIAL, HOURS } from '@/constants/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" style={{ background: '#0f0f0e' }}>
      {/* Filet or en tête de footer */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #EFAD42 40%, #EFAD42 60%, transparent)' }} />

      <div className="max-w-3xl mx-auto px-8 py-16">

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Colonne 1 — Logo · tagline · réseaux */}
          <div className="flex flex-col gap-7">

            <Link href="/" aria-label="Sinnes Automobiles — Retour à l'accueil" className="block" style={{ maxWidth: '260px' }}>
              <Image
                src="/images/logo-sinnes-automobiles.svg"
                alt="Sinnes Automobiles — Spécialiste reproduction et double de clé de voiture à Nice"
                width={600}
                height={225}
                loading="lazy"
                className="w-full h-auto"
              />
            </Link>

            {/* Séparateur fin */}
            <div style={{ width: '32px', height: '1px', background: '#EFAD42', opacity: 0.5 }} />

            <p className="font-body leading-relaxed" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.01em' }}>
              Spécialiste reproduction &amp; double<br />
              de clé de voiture à Nice.<br />
              Intervention {HOURS.display}.
            </p>

            {/* Icônes sociales — flat, discrets */}
            <nav aria-label="Réseaux sociaux" className="flex gap-4">
              {[
                { href: SOCIAL.facebook, label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: SOCIAL.instagram, label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { href: SOCIAL.linkedin, label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map(({ href, label, path }) => (
                <a key={label} href={href} rel="noopener noreferrer" target="_blank" aria-label={label}
                  className="transition-colors duration-200 hover:[color:#EFAD42]"
                  style={{ color: 'rgba(255,255,255,0.3)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </nav>

          </div>

          {/* Colonne 2 — Contact */}
          <div className="flex flex-col gap-3 md:pl-12">
            <p className="font-heading font-bold text-[#EFAD42] text-lg tracking-wide uppercase">
              Nous contacter
            </p>

            <address
              itemScope
              itemType="https://schema.org/LocalBusiness"
              className="not-italic flex flex-col gap-3"
            >
              <meta itemProp="name" content={ORG.name} />

              <a
                href={`mailto:${NAP.email}`}
                itemProp="email"
                className="font-body text-sm text-white/60 hover:text-white transition-colors"
              >
                {NAP.email}
              </a>

              <div className="font-body text-sm text-white/50 mt-2">
                <span itemProp="streetAddress">{NAP.address.streetAddress}</span>
                <br />
                <span itemProp="postalCode">{NAP.address.postalCode}</span>{' '}
                <span itemProp="addressLocality">{NAP.address.addressLocality}</span>
              </div>

              <div className="font-body text-sm text-white/50">
                Intervention {HOURS.display}
              </div>

              {ORG.siret && (
                <div className="font-body text-[0.7rem] text-white/30 mt-1">
                  SIRET : {ORG.siret}
                </div>
              )}
            </address>

            <div className="mt-4 pt-6 border-t border-white/10">
              <Link
                href="/mentions-legales-et-politique-de-confidentialite/"
                className="font-body text-sm text-white/40 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
              >
                Mentions légales & politique de confidentialité
              </Link>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
          <p className="font-body" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em' }}>
            © {year} {ORG.name}. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  )
}
